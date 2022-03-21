const spa = () => {
  document.getElementById('firstBlock').style.display = 'block';
  document.getElementById('secondBlock').style.display = 'none';
  document.getElementById('contact').style.display = 'none';

  document.getElementById('first').addEventListener('click', () => {
    document.getElementById('firstBlock').style.display = 'block';
    document.getElementById('secondBlock').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    document.getElementById('first').style.color = 'blue';
    document.getElementById('third').style.color = 'black';
    document.getElementById('second').style.color = 'black';
  }, false);

  document.getElementById('second').addEventListener('click', () => {
    document.getElementById('firstBlock').style.display = 'none';
    document.getElementById('secondBlock').style.display = 'block';
    document.getElementById('contact').style.display = 'none';
    document.getElementById('second').style.color = 'blue';
    document.getElementById('third').style.color = 'black';
    document.getElementById('first').style.color = 'black';
  }, false);
  document.getElementById('third').addEventListener('click', () => {
    document.getElementById('firstBlock').style.display = 'none';
    document.getElementById('secondBlock').style.display = 'none';
    document.getElementById('contact').style.display = 'block';
    document.getElementById('third').style.color = 'blue';
    document.getElementById('second').style.color = 'black';
    document.getElementById('first').style.color = 'black';
  }, false);
};

export default spa;