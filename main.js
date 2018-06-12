

  const DragDropManager = Object.create(null, {
    init: {
      value: () => {
        const stages = document.querySelectorAll(".stage")
  
        stages.forEach(stage => {
          // Gain reference of item being dragged
          stage.ondragstart = e => {
            e.dataTransfer.setData("text", e.target.classList)
          }
        })
  
  
        const targets = document.querySelectorAll(".target")
  
        targets.forEach(target => {
          // Dragover not supported by default. Turn that off.
          target.ondragover = e => e.preventDefault()
  
          target.ondrop = e => {
            console.log(target);
            // Enabled dropping on target
            const data = e.dataTransfer.getData("text")

            if (target.childNodes.length === 0) {
              e.preventDefault()
              e.target.appendChild(document.querySelector(`.${data.split(" ")[1]}`))
              console.log("check2")
            } else if (target === document.querySelector('article')) {
              console.log("check")
              e.preventDefault()
              document.querySelector('article').appendChild(document.querySelector(`.${data.split(" ")[1]}`))
            } else {
              console.log('denied')
            }
  
            // Determine what's being dropped
  
            // Append card to target component as child
            // TODO: This should only happen if the target has no children nodes
            // TODO: This should not happen if the target is another stage card
            
          }
        })
      }
    }
  })
  
  DragDropManager.init()