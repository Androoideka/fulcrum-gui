function viewPassword(elementToSwitch, accompanyingEye)
{
  var field = document.getElementById(elementToSwitch);
  var marker = document.getElementById(accompanyingEye);
 
  if (field.type == 'password'){
    field.type='text';
    marker.className='far fa-eye-slash';
    
  }
  else{
    field.type='password';
    marker.className='far fa-eye';
  }
}

function switchConfirm(elementToSwitch, accompanyingEye, elementToDisable)
{
  var disable = document.getElementById(elementToDisable);
  disable.disabled = !disable.disabled;
  viewPassword(elementToSwitch, accompanyingEye);
}