/*
This is a sample file. You are free to put any code, any content, any logic in this file...
The filename must remain "myscript.js" to be called by the Scripting Toolkit engine
*/
function Results(queryResult) {
    if (queryResult.size > 0) {
        var output = "";
        var records = queryResult.getArray("records");
        for (var i = 0; i < records.length; i++) {
            var account = records[i];
            output += account.Id + " " + account.Name + "\r\n";
        }
        WScript.echo(output);
    } else WScript.echo("No records matched.");
    ToolKit.Quit();
}
var callback = {
    onSuccess: Results,
    onFailure: function(e) {
        WScript.echo(e)
    }
};
var queryResult = sforce.connection.query("Select Id,Name from Account Limit 10", callback);
