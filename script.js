*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:'Share Tech Mono', monospace;
}

body{
  background:black;
  color:#00ff9c;
  overflow-x:hidden;
}

canvas{
  position:fixed;
  inset:0;
  z-index:-1;
}

header{
  padding:20px;
  text-align:center;
}

.neon{
  font-size:3rem;
  text-shadow:0 0 20px #00ff9c;
}

.hero{
  height:100vh;
  text-align:center;
  padding-top:150px;
}

.section{
  padding:100px 40px;
  text-align:center;
}

.glass{
  background:rgba(0,255,156,0.05);
  border:1px solid rgba(0,255,156,0.2);
  border-radius:20px;
}

.skills{
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  gap:20px;
}

.card{
  padding:20px 30px;
  border:1px solid #00ff9c;
  transition:0.4s;
}

.card:hover{
  transform:scale(1.1) rotateY(10deg);
  box-shadow:0 0 20px #00ff9c;
}

.btn{
  padding:10px 25px;
  background:black;
  border:2px solid #00ff9c;
  color:#00ff9c;
  cursor:pointer;
}

input,textarea{
  width:100%;
  padding:10px;
  margin:10px 0;
  background:black;
  color:#00ff9c;
  border:1px solid #00ff9c;
}

.terminal-box{
  background:black;
  border-top:1px solid #00ff9c;
  padding:20px;
}

#cmd{
  width:100%;
  background:black;
  color:#00ff9c;
  border:none;
  outline:none;
}

#boot{
  position:fixed;
  inset:0;
  background:black;
  color:#00ff9c;
  z-index:9999;
  padding:20px;
}