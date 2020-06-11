<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>noWebpack version</title>
    <script src="https://unpkg.com/react@16/umd/react.production.min.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js" crossorigin></script>

<!--     Don't use this in production: -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <link rel="stylesheet"  href="../src/main.css">
</head>
<body>
<div id="root"></div>
<script>var exports = {};</script>
<script type="text/babel" async>/*<?=include('../src/game.js');?>
 //*/
ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
</script>
</body>
</html>