function update() {
    let progress = document.getElementById('progressBar')
    let funkosNumber = document.querySelectorAll('input[type=checkbox]').length
    let checked = document.querySelectorAll('input[type=checkbox]:checked').length

    progress.style.width = ((checked / funkosNumber) * 100) + '%'
    progress.textContent = Math.round(((checked / funkosNumber) * 100)) + '%'
  }
  

  function selectAll() {
    let checkboxes = document.getElementsByClassName('checkbox')
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].type === 'checkbox') {
        checkboxes[i].checked = true
      }
    }
  }

  function deselectAll() {
    let checkboxes = document.getElementsByClassName('checkbox')
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].type === 'checkbox') {
        checkboxes[i].checked = false
      }
    }
  }

  let modalClick = false

  function modalStatus() {
    let funkosNumber = document.querySelectorAll('input[type=checkbox]').length
    let checked = document.querySelectorAll('input[type=checkbox]:checked').length

    if (checked === funkosNumber) {
      modal.style.display = 'block'
      modalClick = true
    }
  }

  window.onclick = function(event) {
    let modal = document.getElementById('modal')
    let closeModal = document.getElementById('close-modal')

    let id = event.target.id
    if (id === modal.id || id === closeModal.id) {
      modal.style.display = 'none'
    } else if (!modalClick) {
      modalStatus()
    }
  }

  document.addEventListener('click', update)
  window.onload = update