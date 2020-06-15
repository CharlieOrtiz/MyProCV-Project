//GLOBAL VARIABLES
const execute = {
    barTech: true,
    barLanguage: true,
} // This variable help to execute just one time the barTect and barLanguage effect and ignoring the rest of times that our scroll event is executed 

class ComponentsInfo {
    constructor() {
        this.jobDetails = [
            {
                name: 'Auxiliar General',
                place: 'Office Depot de México S.A. de C.V.',
                logo: 'img/officedepot.png',
                goals: 'Empleado del mes',
                tool1: {
                    label: 'Pasillos 40',
                    offset: 15,
                    value: 40,
                    bg: '--linksHover',
                },
                tool2: {
                    label: 'Servicio 30%',
                    offset: 55,
                    value: 30,
                    bg: 'orange',
                },
                tool3: {
                    label: 'Iventarios 30%',
                    offset: 85,
                    value: 30,
                    bg: 'rgb(25, 200, 83)',
                },
                pieChart: true,
            },
            {
                name: 'Practicante Desarrollador Web',
                place: 'Besser Energy S.A.P.I de C.V.',
                logo: 'img/besserlighting.jpg',
                goals: 'Desarrollar de inicio a fin la página web de la empresa',
                tool1: {
                    label: 'HTML, CSS 45%',
                    offset: '10',
                    value: '45',
                    bg: '--linksHover',
                },
                tool2: {
                    label: 'Linux, GIT 30%',
                    offset: '55',
                    value: '30',
                    bg: 'orange',
                },
                tool3: {
                    label: 'Python 25%',
                    offset: '85',
                    value: '25',
                    bg: 'rgb(25, 200, 83)'
                },
                pieChart: true,
            }
        ],

        this.techBarCharts = [
            {htmlBar: [60, 65, 70, 75, 80, 85, 90]},
            {cssBar: [60, 65, 70, 75, 80, 85, 90]},
            {jsBar: [55, 60, 65, 70, 75, 80, 85]},
            {reactBar: [0, 5, 10, 15, 20, 25, 30]}, 
            {gitBar: [0, 5, 10, 15, 20, 25, 30]},
            {seoBar: [30, 35, 40, 45, 50, 55, 60]},
        ],

        this.languageBarCharts = [
            {english: [40, 45, 50, 55, 60, 65, 70]},
            {spanish: [70, 75, 80, 85, 90, 95, 100]},
        ],

        this.factLanguages = [
            {english:
                [
                    {fact0: 'Lectura y escritura correcta, capaz de leer y escribir documentos complejos con un poco de esfuerzo'},
                    {fact1: 'Entendimiento del idioma cuando los demás se están expresando'},
                    {fact2: 'Capaz de mantener una conversación fluída en temas cotidianos o de interes'}
                ]
            },
            {spanish: 
                [
                    {fact0: 'Lengua nativa'},
                    {fact1: 'Redacción de reportes y documentos complejos'}
                ]       
            }
        ],

        this.volunteeringDetails = [
            {
                name: 'GetApp Program',
                place: 'JA México y Accenture México',
                logo: 'img/jamexico.jpg',
                goals: 'Permanecer en el Top 3 durante todo el programa',
                tool1: 'Planeación de Negocios',
                tool2: 'Propuesta de valor',
                tool3: 'Desarrollo de Prototipos',
                tool4: 'Estrategias de Marketing', 
            }
        ]
    }
}

class UI {
    //Default property values that can be used by a method
    constructor() {

    }

    //Method to make the word wrap effect in the banner
    async wordWrapEffect(subtitleHeader, subtitleContainer) {
        let i = 0;
        //While i is defferent from -1 (whose never is going to happen) the code is executed
        while(i !== -1) {
            //Get the width value of one of the subtitles elements
            var widthSubtitle = subtitleHeader[i].offsetWidth + 10;
            //Get the value that is going to be subtracted
            let widthSubtract = widthSubtitle/6;
            //The word clean effect as a promise to be able to execute every letter cut until there's no word
            let wordClean = new Promise((resolve, reject) => {
                setTimeout(() => {
                    const cleanId = setInterval(function cleanFrame() {
                        widthSubtitle = widthSubtitle - widthSubtract;
                        subtitleContainer.style.width = `${widthSubtitle}px`
                        
                        if (widthSubtitle < widthSubtract) {
                            resolve(true);
                            clearInterval(cleanId);
                        }
                    }, 100);
                }, 1500)
            });
            //We await for the word clean effect to be finished
            let wordResult = await wordClean;
            //After the word clean is finished we return a true value inside the wordResult, if the condition is true we make a sum to the i
            if (wordResult && i< 2) {
                i++
            } else {
                i = 0;
            }
            //We remove the visible class from the subtitle that has been clean and apply the visible class to the next subtitle
            document.querySelector('.visible').classList.remove('visible');
            subtitleHeader[i].classList.add('visible');
            //Get the width of the next subtitle element
            widthSubtitle = subtitleHeader[i].offsetWidth + 10;

            let widthAugment = widthSubtitle/6;
            let widthContainer = 0;
            //The word type effect as a promise to be able to execute every letter typed until the word is completed
            let wordType = new Promise((resolve, reject) => {
            const typeId = setInterval(function typeFrame() {
                    widthContainer = widthContainer + widthAugment;
                    
                    subtitleContainer.style.width = `${widthContainer}px`;
                    
                    if (widthContainer >= widthSubtitle) {
                        resolve(true);
                        clearInterval(typeId);
                    }
                }, 100);
            });
            //Await for the word type effect to be finished
            let wordRespond = await wordType;
           
        }
    }
    //Method to active the toggle effect in the sidebar menu
    toggleEffect(sidebarMenu, sidebarIconsMenu, bodyInformation) {
        //Active and desactive the sidebar menu
        sidebarMenu.classList.toggle('active-full-sidebar');
        bodyInformation.classList.toggle('body-information-short');

        //After 100 ms we disable or enable the sidebar with the icons to first positionated the element
        setTimeout(() => {
            sidebarIconsMenu.classList.toggle('disable-left-sidebar');
        }, 100)

    }

    //Method to found the exactly position of an element
    foundElementPosition(element, elementPosition) {
        element.style.top = `${elementPosition.top}px`;
    }

    //Method to create the details box that apper with a hover in the details button
    detailsBoxCreation(highScreen, buttonPosition, {name, place, logo, goals, tool1, tool2, tool3, tool4, pieChart}={}) {
        //We create the div that is going to have all the information
        const detailsBox = document.createElement('div');
        detailsBox.className = 'details-box container-short' //Get the classes that apply the design
        //Variable that reads the top porcentages space between the botton that is beign hovered and the top of the viweport
        const topPercentage = (buttonPosition.top/highScreen)*100;
       //If the percentage is less than 45 we insert our div element at the top but if it's not we insert it at the bottom
        if (topPercentage < 45) {
           detailsBox.style.top = '100%'; 
        } else {
            detailsBox.style.bottom = '100%'; 
        }

        //Here we insert all the elements that our div is going to have with the information extracted of the object array
       detailsBox.innerHTML = `<img src="${logo}" class="job-logo">
       <h4 class="subtitle-section">${name}</h4>
       <h5 class="subtitle-section">${place}</h5>
       <div class="details-info">
            <div class="goals-container">
                <h5>Logros</h5>
                <i class="fas fa-medal"></i>
                <p>${goals}</p>
            </div>
            <div class="tools-container">
                <h5>Conocimientos</h5>
                ${!pieChart ? `<ul>
                    <li>${tool1}</li>
                    <li>${tool2}</li>
                    <li>${tool3}</li>
                    <li>${tool4}</li>
                </ul>` 
                : `<div class="pie-chart">
                    <div class="pie-segment" data-label="${tool1.label}" style="--offset:${tool1.offset}; --value:${tool1.value}; --bg: var(${tool1.bg});" title="${tool1.label}"></div>
                    <div class="pie-segment" data-label="${tool2.label}" style="--offset:${tool2.offset}; --value:${tool2.value}; --bg: ${tool2.bg};" title="${tool2.label}"></div>
                    <div class="pie-segment" data-label="${tool3.label}" style="--offset:${tool3.offset}; --value:${tool3.value}; --bg: ${tool3.bg};" title="${tool3.label}"></div>
                    </div>`}
            </div>
       </div>`

        return detailsBox;
    }

    //Method to create the increment percentage effect in every bar chart 
    barChartsEffect(elements, percentagesArray, lengthPercentage) {
        let j = 0; //To clear the interval in the barCharts percentages

        //First we transform the Node of elements as an array
        const elementsArray = Array.prototype.slice.call(elements);
        //Then we use the forEach and for.. in to insert the properties from the objects that are inside the percentagesArray as classes
        elementsArray.forEach(function(element, index) {
            for(let skill in percentagesArray[index]) {
                element.classList.add(skill);
            }
        });
        //Here we use an interval that is going to insert the percentage num for all elements every 150ms.
        const barPercentage = setInterval(function percentageFrame() {           
            if(j >= lengthPercentage) {
                clearInterval(barPercentage);
            }
            //In case that our clearInterval doesn't work, we execute this code only if j is smaller than lengthPercentage
            if (j < lengthPercentage) {
                for(let i=0; i<elementsArray.length; i++){
                    for(let skill in percentagesArray[i]) {
                        elementsArray[i].nextElementSibling.innerHTML = `${percentagesArray[i][skill][j]}%`;
                    }
                }
            }

            j++;

        }, 150);
    }

    dropDownLanguage(id, languageContainer, factsArray) {
        const languageSection = document.getElementById('languages-section');

        if(document.getElementById(id)) {
            document.getElementById(id).remove();
        } else if(document.querySelector('.facts-language-container')) {
            document.querySelector('.facts-language-container').remove();
            const facts = this.factLanguagesCreation(factsArray, id);
            languageSection.insertBefore(facts, languageContainer.nextSibling);
        } else {
            const facts = this.factLanguagesCreation(factsArray, id);
            languageSection.insertBefore(facts, languageContainer.nextSibling);
        }
    }

    factLanguagesCreation(factsArray, id) {
        const divFacts = document.createElement('div');
        divFacts.className = 'facts-language-container container-medium sub-section-container'
        divFacts.id = id;

        let ul = '';
        ul += '<ul>';
        factsArray.forEach((element, index) => {
            const fact = element[`fact${index}`];
            ul += `<li>${fact}</li>`
        });
        ul += '</ul>';
        divFacts.innerHTML = ul;

        return divFacts;
    }

    /*Contact Box creation*/
    contactBoxCreation(parent) {
        const div = document.createElement('div');
        div.className = 'close-wrapper contact-wrapper';

        div.innerHTML = `<div class="contact-container">
         <span class="close-icon-container"><i class="close-wrapper fas fa-times"></i></span>
                <h3 class="subtitle-section">Envíame un mensaje</h3>
                <div class="media-contact-container">
                    <a class="email-container">
                        <img src="img/gmail.png" alt="Gmail">
                        <p>Email</p>
                    </a>
                    <a class="whatsapp-container">
                        <img src="img/WhatsApp.svg" alt="WhatsApp">
                        <p>WhatsApp</p>
                    </a>
                </div>
        </div>
        `;

        //Print element in browser
        parent.appendChild(div);

        return div;
    }

    changeDefaultValues() {
        
    }
}

//EVENT LISTENERS
document.addEventListener('DOMContentLoaded', function() {
    //Instance
    const ui = new UI();
    //Get the subtitles from the header and the width from the first element
    const subtitleHeader = document.querySelectorAll('.subtitle');
    const widthSubtitle = subtitleHeader[0].offsetWidth
    //Get the subtitle container and applied a width according to the first element
    const subtitleContainer = document.getElementById('subtitle-container');
    subtitleContainer.style.width = `${widthSubtitle + 10}px`;

    /*Get a method to found the top, left, etc of the positions of the element in the selector*/
    const sidebarIconsMenu = document.querySelector('.left-sidebar');
    const iconsPosition = document.querySelector('#profile-contact').getBoundingClientRect();
        
    //Call the found method with the element and its different positions as parameters
    ui.foundElementPosition(sidebarIconsMenu, iconsPosition);

    ui.wordWrapEffect(subtitleHeader, subtitleContainer);
});

//Click event listener to every link inside the navigation
document.querySelector('.navigation').addEventListener('click', function(e) {
    const ui = new UI();
    //DELEGATION
    //Click event for toggle menu
    if (e.target.id === 'toggle__menu') {
        const sidebarMenu = document.querySelector('.full-left-sidebar');
        const sidebarIconsMenu = document.querySelector('.left-sidebar');
        const bodyInformation = document.querySelector('.body-information');
        /*Get a method to found the top, left, etc of the positions of the element in the selector*/
        const iconsPosition = document.querySelector('#profile-contact').getBoundingClientRect();
        
        //Call the found method with the element and its different positions as parameters
        ui.foundElementPosition(sidebarIconsMenu, iconsPosition);
        //Call the toggleEffect method
        ui.toggleEffect(sidebarMenu, sidebarIconsMenu, bodyInformation);
    }
});

//Mouse enter event listener to appear extra information about a specific job
document.querySelector('.experience-container').addEventListener('mouseenter', function(e) {
    //We are going to need the height of the viewport so we got it
    const highScreen = window.innerHeight;
    //We get the buttons container to detect one from another
    const jobZero = document.getElementById('job-0');
    const jobOne = document.getElementById('job-1');

	// Make sure it's not the document object
    //if (!('matches') in e.target) return;

    // Do your thing...
	if (e.target.matches('.details')) {
		//Here we detect the details button that is being hover, zero is for office and one for besser
        if(e.target === jobZero) {
            //Found the exact position of the button in the viewport
            const buttonPosition = jobZero.getBoundingClientRect();
            //Get the object array that has the information that we're going to need
            const info = new ComponentsInfo();
            //Create the UI instance object
            const ui = new UI();
            //Call the method to create the details box, here we need four parameters: the index number of the object array according with the number job that the e.target found, the complete height of the viewport, the button position and the object array, where it is the information that we're going to need.
            const detailsBox = ui.detailsBoxCreation(highScreen, buttonPosition, info.jobDetails[0]);
            //At the end we insert the detailsBox element that our method has returned inside the jobZero element
            jobZero.appendChild(detailsBox);
        
        } else if(e.target === jobOne) {
            const buttonPosition = jobOne.getBoundingClientRect();
            //Get the object array that has the information that we're going to need
            const info = new ComponentsInfo();
            //Create the UI instance object
            const ui = new UI();
            //Call the method to create the details box
            const detailsBox = ui.detailsBoxCreation(highScreen, buttonPosition, info.jobDetails[1]);
            //console.log(detailsBox);
            jobOne.appendChild(detailsBox);
        }
	}
}, true);

//Mouse leave event to remove the details box that our mouse enter element creates
document.querySelector('.experience-container').addEventListener('mouseleave', function(e) {
    // Make sure it's not the document object
    //if (!('matches') in e.target) return;
    let detailsBox;
    // Do your thing...
    if (e.target.matches('.details')) {
        detailsBox = document.querySelector('.details-box')
        detailsBox.remove();
    }
}, true);

window.addEventListener('scroll', function() {
    //Get the Tech Skills container to know its exact position in every scroll
    const techSkillsTop = document.getElementById('technical-skills').getBoundingClientRect().top;
    const languageTop = document.getElementById('languages-section').getBoundingClientRect().top;

    //If techSkills container is at 180 pixels from top then
    if (techSkillsTop < 180 && execute.barTech) {
        //Get every tech skill that we have
        const techSkillsNode = document.querySelectorAll('.bar-chart-tech');
        //Create the instance of the class ComponentsInfo to have acces to the tech bar charts percentages
        const info = new ComponentsInfo();
        //Instance of UI
        const ui = new UI();
        //Call the method barChartEffect from the UI
        ui.barChartsEffect(techSkillsNode, info.techBarCharts, info.techBarCharts[0].htmlBar.length);
        execute.barTech = false; //To avoid the execution of this condition
    }

    if (languageTop < 180 && execute.barLanguage) {
        const languagesNode = document.querySelectorAll('.bar-chart-language');
        const info = new ComponentsInfo();
        const ui = new UI();
        ui.barChartsEffect(languagesNode, info.languageBarCharts, info.languageBarCharts[0].english.length);
        execute.barLanguage = false;
    }
});

document.getElementById('languages-section').addEventListener('click', function(e) {
    const arrowButtons = document.querySelectorAll('.arrow-down-button');

    if(e.target === arrowButtons[0] || e.target === arrowButtons[0].firstElementChild) {
        const languageContainer = arrowButtons[0].parentElement;
        const info = new ComponentsInfo();
        const ui = new UI();
        ui.dropDownLanguage('english-language', languageContainer, info.factLanguages[0].english);
    } else if(e.target === arrowButtons[1] || e.target === arrowButtons[1].firstElementChild) {
        const languageContainer = arrowButtons[1].parentElement;
        const info = new ComponentsInfo();
        const ui = new UI();
        ui.dropDownLanguage('spanish-language', languageContainer, info.factLanguages[1].spanish);
    }
});

document.querySelector('.volunteering-section').addEventListener('mouseenter', function(e) {
    //We are going to need the height of the viewport so we got it
    const highScreen = window.innerHeight;
    //We get the buttons container to detect one from another
    const volunteerZero = document.getElementById('volunteering-0');

	// Make sure it's not the document object
    //if (!('matches') in e.target) return;

    // Do your thing...
	if (e.target.matches('.details')) {
		//Here we detect the details button that is being hover, zero is for office and one for besser
        if(e.target === volunteerZero) {
            //Found the exact position of the button in the viewport
            const buttonPosition = volunteerZero.getBoundingClientRect();
            //Get the object array that has the information that we're going to need
            const info = new ComponentsInfo();
            //Create the UI instance object
            const ui = new UI();
            //Call the method to create the details box, here we need four parameters: the index number of the object array according with the number job that the e.target found, the complete height of the viewport, the button position and the object array, where it is the information that we're going to need.
            const detailsBox = ui.detailsBoxCreation(highScreen, buttonPosition, info.volunteeringDetails[0]);
            //At the end we insert the detailsBox element that our method has returned inside the jobZero element
            volunteerZero.appendChild(detailsBox);
        
        }
    }
}, true);

document.querySelector('.volunteering-section').addEventListener('mouseleave', function(e) {
    // Make sure it's not the document object
    //if (!('matches') in e.target) return;
    let detailsBox;
    // Do your thing...
    if (e.target.matches('.details')) {
        detailsBox = document.querySelector('.details-box')
        detailsBox.remove();
    }
}, true);

(function portfolioVideos() {
    const containersNode = document.querySelectorAll('[data-video="video-container"]');
    const containers = Array.prototype.slice.call(containersNode);
    const videos = containers.map(element => {return element.querySelector('video')});
    containers.forEach((element, index) => {
        element.addEventListener('mouseenter', function() {
            videos[index].play();
        });

        element.addEventListener('mouseleave', function() {
            videos[index].pause();
        });
    })
})();

//Contact Button: Open the contact wrapper
document.querySelector('#anchor-contact').addEventListener('click', function(e) {
    e.preventDefault();
    const ui = new UI();
    const parentContainer = document.querySelector('.contact-button-container');
    const divWrapper = ui.contactBoxCreation(parentContainer);
    //ContactWrapper: Close it    
    divWrapper.addEventListener('click', function(e) {
        if(e.target.className.match('close-wrapper')) {
            divWrapper.remove();
        }
    });
});

//Function to add scroll effect to the On-Page-Link
(function addAnchorEventListeners() {
    //Get anchors and the corresponding sections
    const anchors =  document.querySelectorAll('.nav__links');
    const sections = document.querySelectorAll('.information-sections');
    //Turn our anchors Node variable into an Array
    const anchorsArray = Array.prototype.slice.call(anchors);

    anchorsArray.forEach((element, index)=>{
        //Add the click event listener to every anchor
        element.addEventListener('click', function(e) {
            //Avoid the default behavior on anchors that target inside the page
            e.preventDefault();
            //Add scroll and position
            window.scrollTo({
                'behavior': 'smooth',
                'left': 0,
                'top': sections[index].offsetTop - 70, /*R*/ 
            });
        });
    });
})();

document.querySelector('.display-language').addEventListener('click', function(e) {
    const displayContainer = document.querySelector('.display-language');
    displayContainer.classList.toggle('display-on');

    const listLanguages = document.querySelector('.list-languages').children;
    const arrayList = Array.prototype.slice.call(listLanguages);
    
    arrayList.forEach((language) => {
        language.addEventListener('click', function() {
            const lang = language.querySelector('.language-option').textContent;
            const flag = language.querySelector('.flag-image').src;
            
            const selectedLang = displayContainer.querySelector('.selected-lang');
            const selectedFlag = displayContainer.querySelector('.selected-flag');

            selectedLang.textContent = lang;
            selectedFlag.src = flag;
        })
    });

    
});
