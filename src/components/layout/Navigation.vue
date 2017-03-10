<template>
<div>
    <div id='nav'>
        <ul id='navigation'>
            <li class='title'><a href='#'>Blog</a></li>
            <li class='title'><a href='#'>Crew</a></li>
            <li class='title'><a href='#'>Promos</a></li>
            <li class='title'><a href='#'>Tricks</a></li>
            <li class='title'><a href='#'>Parties</a></li>
            <img src="../../assets/img/disney1.png" id="logo" />           
            <li class='title'><a href='#'>P.J. Squad</a></li>
            <li class='title'><a href='#'>Chat</a></li>
            <li class='title'><a href='#'>Fanart</a></li>
            <li class='title'><a href='#'>Graphics</a></li>
            <li class='title'><a href='#'>Beta</a></li>
        </ul>
    </div>
</div>
</template>

<script>
	export default {

	}
</script>

<style>
#logo { float: left; }

#nav
{
    background: url(../../assets/img/nav-bg.png) no-repeat scroll top left;                 background-color: none;
    width: 100%;
    height:66px;
    box-shadow: 0px 1px 10px #5E5E5E;
    position:fixed;
    top:0px;
}

.title
{
    /*display:none;*/
    color:#EDEDED;
    font-family:verdana;
    font-size:18px;
    width:120px;
    margin-top:6px;
    margin-left:30px;
    font-weight:bold;
    float:left;
}


#navigation
{
    list-style-type:none; 
    float: left;
}


li 
{ 

    display:inline;
    padding:15px;
}

#nav a
{
    font-size: 1.6em;
    text-transform: uppercase;
    text-shadow: 0 0 0.3em #464646;
    font-weight: bold;
    font-family:century gothic;
    text-decoration:none;
    color:#262626;
    opacity:0.26;
} 
 #nav a:hover 
{
    opacity:0.36;
}
</style>

