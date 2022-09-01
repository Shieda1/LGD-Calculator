// https://www.omnicalculator.com/finance/lgd

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const lossgivendefaultRadio = document.getElementById('lossgivendefaultRadio');
const recoveryrateRadio = document.getElementById('recoveryrateRadio');
const expectedexposureRadio = document.getElementById('expectedexposureRadio');

let lossgivendefault;
let recoveryrate = v1;
let expectedexposure = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

lossgivendefaultRadio.addEventListener('click', function() {
  variable1.textContent = 'Recovery rate';
  variable2.textContent = 'Expected exposure';
  recoveryrate = v1;
  expectedexposure = v2;
  result.textContent = '';
});

recoveryrateRadio.addEventListener('click', function() {
  variable1.textContent = 'Loss given default';
  variable2.textContent = 'Expected exposure';
  lossgivendefault = v1;
  expectedexposure = v2;
  result.textContent = '';
});

expectedexposureRadio.addEventListener('click', function() {
  variable1.textContent = 'Loss given default';
  variable2.textContent = 'Recovery rate';
  lossgivendefault = v1;
  recoveryrate = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(lossgivendefaultRadio.checked)
    result.textContent = `Loss given default = ${computelossgivendefault().toFixed(2)}`;

  else if(recoveryrateRadio.checked)
    result.textContent = `Recovery rate = ${computerecoveryrate().toFixed(2)}`;

  else if(expectedexposureRadio.checked)
    result.textContent = `Expected exposure = ${computeexpectedexposure().toFixed(2)}`;
})

// calculation

function computelossgivendefault() {
  return Number(expectedexposure.value) * (1 - (Number(recoveryrate.value) / 100));
}

function computerecoveryrate() {
  return (1 - (Number(lossgivendefault.value) / Number(expectedexposure.value))) * 100;
}

function computeexpectedexposure() {
  return Number(lossgivendefault.value) / (1 - (Number(recoveryrate.value) / 100));
}