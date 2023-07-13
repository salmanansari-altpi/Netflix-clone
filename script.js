const inputEl = document.querySelectorAll('.input')
const btnStart = document.querySelectorAll('.btn-start')
const containerAccordian = document.querySelector('.inner')

const data = [
    { id: '1', question: 'What is Netflix?', answer: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices' },
    { id: '2', question: 'How much does Netflix cost?', answer: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.' },
    { id: '3', question: 'Where can i watch?', answer: 'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.' },
    { id: '4', question: 'How do I cancel?', answer: 'Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.' },
    { id: '5', question: 'What can i watch on Netflix?', answer: 'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.' },
    { id: '6', question: 'Is Netflix good for kids?', answer: 'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.' },
]

// ACCORDIAN
function showAccordian () {
    data.forEach(item => {
        containerAccordian.innerHTML += `
        <div class="item ${item.id}">
            <div class="ques">
                <p>${item.question}</p>
                <span class="add">+</span>
                <span class="sub close">X</span>
            </div>
            <div class="ans close">
                <p>${item.answer}</p>
            </div>
        </div>
        `
    })
}

showAccordian()

const containerItem = document.querySelectorAll('.item')
const answerEl = document.querySelectorAll('.ans')

const btnOpen = document.querySelectorAll('.add')
const btnClose = document.querySelectorAll('.sub')


// EMAIL BUTTON
btnStart.forEach(btn => {
    btn.addEventListener('click', function(e) {
        inputEl.forEach(input => {
            const email = input.value

            if (email.trim().length < 1) {
                input.style.border = '1px solid red'
                input.setAttribute('placeholder', 'Please fill this field')
            }
            
            if (!email.includes('@')) {
                input.value = ''
                input.style.border = '1px solid red'
                input.setAttribute('placeholder', 'Please enter valid email')
            }
        })
    })
})

// ACCORDIAN OPEN
btnOpen.forEach(btn => {
    btn.addEventListener('click', function(e) {
        const parent = btn.parentElement.parentElement.classList[1]
        btn.classList.add('close')
        btnClose.forEach(btn => btn.parentElement.parentElement.classList.contains(parent) && btn.classList.remove('close'))
        answerEl.forEach(ans => ans.parentElement.classList.contains(parent) && ans.classList.remove('close'))
    })
})

// ACCORDIAN CLOSE
btnClose.forEach(btn => {
    btn.addEventListener('click', function(e) {
        const parent = btn.parentElement.parentElement.classList[1]
        btn.classList.add('close')
        btnOpen.forEach(btn => btn.parentElement.parentElement.classList.contains(parent) && btn.classList.remove('close'))
        answerEl.forEach(ans => ans.parentElement.classList.contains(parent) && ans.classList.add('close'))
    })
})
