const container = document.getElementById('grid-container');
let round = 1;
let area = [];
let step = [];
let highlight = null;
  
for(let i = 1;i < 10;i ++){
  const grid = document.createElement('div');
  grid.classList.add('grid')
  grid.id = i;
  for(let j = 1;j < 10;j ++){
    const cell = document.createElement('div');
    cell.classList.add('cell') //小格子 空
    cell.addEventListener('click',function(){
      if(i === area[area.length - 1] && cell.className === 'cell' || round === 1){
        area.push(j);
        showarea(j);
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
function showarea(next_area_num){
  next_area = document.getElementById('next_area_num');
  console.log(next_area);
  if(highlight != null){
    Array.from(highlight).forEach(item =>{
      if(item.classList == 'cell highlight'){
        item.className = 'cell';
      }
    });
  }
  if(next_area != null){
    highlight = next_area.children;

    Array.from(highlight).forEach(item =>{
      if(item.className == 'cell'){
        
      }
    });
  }
}
