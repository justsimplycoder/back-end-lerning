const xml2js = require('xml2js');
const fs = require('node:fs');

const obj = {
  Lines: {
    Line: [
      {
        $: {Id: '1'},
        _: 'one'
      },
      {
        $: {Id: '2'},
        _: 'two'
      },
    ]
  }
};

const builder = new xml2js.Builder();
const xml = builder.buildObject(obj);
console.log(xml);

/* ->
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Lines>
    <Line Id="1">one</Line>
    <Line Id="2">two</Line>
</Lines>
*/

fs.writeFile(__dirname + '/data.xml', xml, (error) => {
    if(error) {
      console.log(error);
    } else {
      fs.readFile(__dirname + '/data.xml', (error, data) => {
        if(error) {
          console.log(error);
        } else {
          const parser = new xml2js.Parser();

          parser.parseStringPromise(data)
            .then(function (res) {
              res.Lines.Line.forEach(el => {
                console.log(`value: ${el._}, id: ${el.$.Id}`);
              })
              /* ->
              value: one, id: 1
              value: two, id: 2
              */
            })
            .catch(function (err) {
              console.error(err);
            })
        }
      });
    }
});