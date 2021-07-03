function update() {
    let checked = 0
    let progress = document.getElementById('progressBar')
    let funkosNumber = document.querySelectorAll('input[type=checkbox]').length
    let boxes = document.querySelectorAll('input[type=checkbox]:checked')

    checked = boxes.length
    progress.style.width = ((checked / funkosNumber) * 100) + '%'
    progress.textContent = Math.round(((checked / funkosNumber) * 100)) + '%'

    let modal = document.getElementById('modal')
    let closeModal = document.getElementById('close-modal')

    if (checked === funkosNumber) {
      // alert('¡Felicidades! Completaste ésta colección')
      modal.style.display = 'block'
    }

    closeModal.onclick = function() {
      modal.style.display = 'none'
    }

    window.onclick = function(event) {
      if (event.target === modal) {
        modal.style.display = 'none'
      }
    }
  }

  document.addEventListener('click', update)
  window.onload = update

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