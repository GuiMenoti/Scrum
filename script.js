function startSprint() {
    alert('Sprint iniciada com sucesso!!!✅');
  }
  
  function dailyScrum() {
    const developmentProgress = document.getElementById('developmentProgress');
    const sprintBacklogItems = document.querySelectorAll('#sprintBacklog li');
  
 
    sprintBacklogItems.forEach(item => {
      const task = document.createElement('li');
      task.textContent = `Em Andamento: ${item.textContent}`;
      developmentProgress.appendChild(task);
      item.remove();
    });
  
    alert('Daily Scrum: O que você fez ontem? O que você vai fazer hoje? Algum impedimento?');
  }
  function reviewSprint() {
    const developmentProgress = document.getElementById('developmentProgress');
    const progressItems = document.querySelectorAll('#developmentProgress li');
  
    progressItems.forEach(item => {
      item.textContent = `Finalizado: ${item.textContent.replace('Em Andamento: ', '')}`;
    });
  
    alert('Revisão da Sprint: Demonstrar o incremento aos stakeholders e obter feedback.');
  }
  
  function retrospective() {
    alert('Retrospectiva: Reflita sobre o sprint, identifique o que deu certo e o que pode ser melhorado.');
  }


  function moveToSprintBacklog(item) {
    const sprintBacklog = document.getElementById('sprintBacklog');
    const listItem = document.createElement('li');
    listItem.textContent = item.textContent;
    sprintBacklog.appendChild(listItem);
    item.remove();
  }