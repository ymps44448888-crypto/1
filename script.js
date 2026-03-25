const container = document.getElementById('grid-container');
let round = 1;
let area = [];
let step = [];

for(let i = 1;i < 10;i ++){
  const grid = document.createElememt('div');
  grid.classList.add('grid')
  grid.id = i;
  for(int j = 1;j < 10;j ++){
    cell.classList.add('cell') //小格子 空
    cell.addEventListener('click',founction(){
      if(i == area[area.length - 1] && cell.className = 'cell' || round == 1){
        area.push(j);
        this.className = 'cell';
        if(round % 2 != 0){
          this.classList.add('o');
        }
        else{
          this.classList.add('x');
        }
        step.push(this);
        round += 1;
      }
    });
    grid.appendChild(cell);
  }
  container.appendChild(grid);
}

function backstep(){
  step[step.length - 1].className = "cell";
  area.pop();
  step.pop();
  if(round > 0){
    round -= 1;
  }
}
