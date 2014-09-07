console.log(process.argv
            .slice(2, process.argv.length)
            .reduce(function(a, b) 
                    { return parseFloat(a) + parseFloat(b); }));