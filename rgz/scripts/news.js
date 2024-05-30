function toggleCardVisibility(buttonId, cardId) {
   const button = document.getElementById(buttonId);
   const card = document.getElementById(cardId);

   button.addEventListener('click', function() {
      if (card.style.display === 'block') {
         card.style.display = 'none';
      } else {
         card.style.display = 'block';
      }
   });
}

toggleCardVisibility('button-1', 'card-next-1');
toggleCardVisibility('button-2', 'card-next-2');
toggleCardVisibility('button-3', 'card-next-3');
toggleCardVisibility('button-4', 'card-next-4');
toggleCardVisibility('button-5', 'card-next-5');
toggleCardVisibility('button-6', 'card-next-6');
toggleCardVisibility('button-7', 'card-next-7');
toggleCardVisibility('button-8', 'card-next-8');
toggleCardVisibility('button-9', 'card-next-9');
toggleCardVisibility('button-10', 'card-next-10');