const candi = document.querySelector('.candi')
const propo = document.querySelector('.propo')
const parti = document.querySelector('.parti')

const aperte = document.querySelector('.botão')
aperte.addEventListener('click', () =>{
    document.body.classList.toggle('animação');
})

function go(a,b)
{
    let DisplayNone, DisplayBlock
    if(b==1)
    {
        DisplayNone = candi;
    }
    else if(b==2)
    {
        DisplayNone = propo;
    }
    else
    {
        DisplayNone = parti;
    }

    DisplayNone.style.display = 'none';
    
    if(a==1)
    {
        DisplayBlock = candi;
    }
    else if(a==2)
    {
        DisplayBlock = propo;
    }
    else
    {
        DisplayBlock = parti;
    }

    DisplayBlock.style.display = 'block';
}