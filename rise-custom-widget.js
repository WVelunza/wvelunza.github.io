/* === Tronbot AI Banner & Main Widgets Script (URL Version) === */

(function() {
    'use strict';
    
    // === CONFIGURATION (Edit these values as needed) ===
    const CONFIG = {
        // Weather API Key - Get yours free at: https://openweathermap.org/api
        weatherApiKey: '562d06561410e9426acdbf7d98e60dee',
        
        // Temperature units: 'imperial' for Fahrenheit, 'metric' for Celsius
        temperatureUnits: 'imperial', // Change to 'metric' for Celsius
        
        // AI Assistant Link
        aiAssistantUrl: 'https://risemarketinggroup.net/ai-solutions/',
        
        // Animation GIF URL
        animationGifUrl: 'https://storage.googleapis.com/msgsndr/TAOrzsMG01EMNlMHAaLJ/media/67b5d217bfeec6774c0ef2fb.gif'
    };
    
    // Namespace for avoiding conflicts
    const TRONBOT = {
        selectors: {
            bodyClass: '_008TKWRMeS0joUHomnW8',
            dashboardWrapper: '._008TKWRMeS0joUHomnW8 #dashboard-wrapper > div',
            customerNameSelector: '._008TKWRMeS0joUHomnW8 div.inline-block.w-56.px-2.py-1.text-sm.break-all.dark\\:text-white > div:nth-child(1)'
        },
        ids: {
            welcomeMessage: 'tronbot-custom-welcome',
            animatedGreeting: 'tronbot-animated-greeting',
            widgets: 'tronbot-custom-widgets',
            aiAssistantBtn: 'tronbot-ai-assistant-btn',
            traxnFeature: 'tronbot-traxn-feature',
            cssStyles: 'tronbot-injected-styles'
        },
        classes: {
            boxContainer: 'box-container',
            box: 'box',
            boxHeader: 'box-header',
            btn: 'btn',
            clearTasksBtn: 'clear-tasks-btn',
            progressBarBg: 'progress-bar-bg',
            progressBarFill: 'progress-bar-fill',
            todoList: 'todo-list',
            todoInput: 'todo-input',
            todoItem: 'todo-item',
            quickLinkRow: 'quick-link-row',
            quickLinksList: 'quick-links-list',
            motivationMsg: 'motivation-msg',
            progressPercentLabel: 'progress-percent-label'
        },
        storage: {
            tasksKey: 'tronbot-dashboard-tasks'
        }
    };
    
    // --- CSS INJECTION AREA ---
    function injectTronbotCSS() {
        // Check if CSS already injected
        if (document.getElementById(TRONBOT.ids.cssStyles)) return;
        
        const style = document.createElement('style');
        style.id = TRONBOT.ids.cssStyles;
        style.textContent = `
            /* === TRONBOT EXTRACTED INLINE STYLES === */
            
            /* Welcome Banner */
            #${TRONBOT.ids.animatedGreeting} {
                background-image: linear-gradient(45deg, #02a8d6 5%, #3A4A60 90%);
                color: white; 
                padding: 15px 30px; 
                text-align: left;
                text-wrap: balance;
                font-size: 1.25rem; 
                font-weight: 700;
                line-height: 1.15em;
                border-radius: 1rem; 
                margin-top: 1.25rem;
                opacity: 0; 
                transform: translateY(-20px);
                transition: opacity 0.8s ease-out, transform 0.8s ease-out;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 1.25rem;
                position: relative;
                overflow: visible;
            }
            
            #${TRONBOT.ids.animatedGreeting} > div:first-child {
                flex: 1;
            }
            
            #${TRONBOT.ids.animatedGreeting} span {
                display: block; 
                font-size: 36px; 
                font-weight: bold; 
                line-height: 1.15em; 
                margin-bottom: 1.25rem;
            }
            
            #${TRONBOT.ids.traxnFeature} {
                opacity: 0.9; 
                font-size: 1.25rem; 
                margin-bottom: 1.25rem;
            }
            
            #${TRONBOT.ids.animatedGreeting} > div:last-child {
                position: relative; 
                flex: 0 0 30%; 
                display: flex; 
                align-items: center; 
                justify-content: end;
            }
            
            #${TRONBOT.ids.animatedGreeting} img {
                width: 100%; 
                max-width: 220px; 
                height: auto; 
                position: relative; 
                overflow: visible;
            }
            
            .${TRONBOT.classes.btn} {
                border: 2px solid #fff; 
                margin-top: 10px;
                background: transparent;
                color: white;
                padding: 8px 16px;
                border-radius: 5px;
                cursor: pointer;
                text-decoration: none;
                display: inline-block;
            }
            
            /* Widget Container */
            .${TRONBOT.classes.boxContainer} {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 0.625rem;
                margin-top: 0.625rem;
            }
            
            .${TRONBOT.classes.box} {
                border-radius: 1rem;
                background: #ffffff;
                border: 1px solid #e0e6ed;
                padding: 20px;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                transition: box-shadow 0.3s ease, transform 0.2s ease;
                min-height: 200px;
            }
            
            .${TRONBOT.classes.boxHeader} {
                display: flex;
                align-items: center;
                gap: 10px;
                font-size: 16px;
                font-weight: 600;
                color: #1a3557;
                margin-bottom: 15px;
                padding-bottom: 10px;
                border-bottom: 2px solid #f0f4f8;
            }
            
            .${TRONBOT.classes.boxHeader} img {
                width: 24px;
                height: 24px;
            }
            
            /* Todo Widget Elements */
            .${TRONBOT.classes.clearTasksBtn} {
                cursor: pointer;
                background: #f15d21;
                color: white;
                font-size: 12px;
                border: none;
                border-radius: 5px;
                padding: 4px 10px;
            }
            
            .${TRONBOT.classes.progressBarBg} {
                overflow: hidden;
                position: relative;
                width: 100%;
                height: 1.25rem;
                background: #eee;
                border-radius: 0.313rem;
                margin-bottom: 10px;
            }
            
            .${TRONBOT.classes.progressBarFill} {
                width: 0%;
                height: 100%;
                background: #4caf50;
                transition: width 0.5s;
            }
            
            .${TRONBOT.classes.progressPercentLabel} {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translateX(-50%) translateY(-50%);
                font-size: 11px;
                color: #333;
                font-weight: 600;
                line-height: 1em;
            }
            
            .${TRONBOT.classes.motivationMsg} {
                min-height: 20px; 
                color: #4caf50; 
                font-size: 13px; 
                font-weight: 500;
                margin: 8px 0 5px 0;
            }
            
            .${TRONBOT.classes.todoInput} {
                width: 100%;
                padding: 8px;
                border: 1px solid #ddd;
                border-radius: 4px;
                margin-top: 10px;
            }
            
            .${TRONBOT.classes.todoItem} {
                display: flex;
                align-items: center;
                gap: 8px;
                padding: 5px 0;
                border-bottom: 1px solid #f0f0f0;
            }
            
            /* Quick Links */
            .${TRONBOT.classes.quickLinksList} {
                width: 100%; 
                margin-top: 10px;
            }
            
            .${TRONBOT.classes.quickLinkRow} {
                cursor: pointer;
                overflow: hidden;
                position: relative;
                display: flex;
                align-items: center;
                gap: 16px;
                background: linear-gradient(45deg, rgb(2, 168, 214) 5%, rgb(58, 74, 96) 90%);
                color: white;
                border: none;
                border-radius: 10px;
                box-shadow: 0 2px 10px rgba(30, 60, 114, 0.10);
                margin-bottom: 14px;
                padding: 16px 18px 12px 18px;
                transition: background 0.2s, box-shadow 0.2s, transform 0.15s;
            }
            
            .${TRONBOT.classes.quickLinkRow} img {
                height: 38px;
                width: 38px;
                flex-shrink: 0;
                filter: brightness(1.5) grayscale(1);
            }
            
            .${TRONBOT.classes.quickLinkRow} > div {
                display: flex; 
                flex-direction: column; 
                justify-content: center;
            }
            
            .${TRONBOT.classes.quickLinkRow} > div > div:first-child {
                font-size: 16px; 
                font-weight: 600; 
                color: white; 
                letter-spacing: 0.2px;
            }
            
            .${TRONBOT.classes.quickLinkRow} > div > div:last-child {
                color:#e0e7ef; 
                font-size:13px;
            }
            
            /* Weather Widget */
            .tronbot-weather-content {
                display: flex; 
                flex-direction: column; 
                align-items: center; 
                width: 100%;
            }
            
            .tronbot-weather-content img {
                width: 100px;
                height: 100px;
                display: block;
                margin-bottom: 8px;
            }
            
            .tronbot-weather-temp {
                font-size: 24px; 
                font-weight: bold;
            }
            
            .tronbot-weather-content > div:last-child {
                font-size: 16px; 
                color: #888; 
                margin-top: 4px;
            }
            
            .tronbot-weather-location {
                float: right; 
                font-size: 14px; 
                font-weight: 400;
            }
            
            /* Tips Widget */
            .tronbot-tip-highlight-bg {
                background: linear-gradient(90deg, #eaf4fb 60%, #d2e6f7 100%);
                border-radius: 12px;
                padding: 18px 20px 16px 20px;
                margin-top: 10px;
                box-shadow: 0 2px 8px rgba(30, 60, 114, 0.06);
            }
            
            .tronbot-tip-heading {
                display: inline-block;
                background: #b6d6f6;
                color: #1a3557;
                font-size: 15px;
                font-weight: 700;
                letter-spacing: 0.1px;
                border-radius: 7px;
                margin-bottom: 10px;
                padding: 7px 13px 6px 13px;
            }
            
            .tronbot-tip-content {
                color: #23405a;
                font-size: 14px;
                line-height: 1.7em;
                margin-left: 2px;
            }
            
            /* Todo Header Layout */
            .tronbot-todo-header {
                display:flex; 
                align-items: center; 
                justify-content: space-between;
            }
            
            .tronbot-todo-header-left {
                display: flex; 
                align-items: center; 
                gap: 10px; 
                margin-bottom: 0.625rem;
            }
        `;
        
        document.head.appendChild(style);
    }
    
    // --- Utility Functions ---
    function getGreeting() {
        const hour = new Date().getHours();
        
        if (hour < 12) {
            return "Good Morning ⏰";
        } else if (hour < 18) {
            return "Good Afternoon ⌛";
        } else {
            return "Good Evening 🌙";
        }
    }
    
    function getCustomerName() {
        let customerName = "Coach";
        const possibleSelectors = document.querySelectorAll(TRONBOT.selectors.customerNameSelector);
        
        if (possibleSelectors.length > 0) {
            customerName = possibleSelectors[0].innerText.trim();
            customerName = customerName.split(' ')[0];
        }
        
        return customerName;
    }
    
    const traxnAIFeatures = [
        "🚀 Automate processes with AI and reduce operational costs effortlessly!",
        "💡 Enhance productivity by letting AI handle calls and all follow up like a champ!",
        "📊 Use AI to optimize resource allocation and maximize efficiency!",
        "🤖 Automate communication and save time with our AI bot!",
        "🤖 Want to see how you can totally streamline with AI assistant and Bot?",
    ];
    
    function getRandomFeature() {
        return traxnAIFeatures[Math.floor(Math.random() * traxnAIFeatures.length)];
    }
    
    // Helper to extract domain and locationId from URL
    function getDomainAndLocationId() {
        const { origin, pathname } = window.location;
        const match = pathname.match(/\/location\/([^/]+)/);
        
        return {
            domain: origin,
            locationId: match ? match[1] : ''
        };
    }
    
    // --- Banner Section ---
    function addWelcomeMessage() {
        if (!document.body.classList.contains(TRONBOT.selectors.bodyClass)) return;
        if (document.getElementById(TRONBOT.ids.welcomeMessage)) return;
        
        const customerName = getCustomerName();
        const greeting = getGreeting();
        const randomFeature = getRandomFeature();
        
        const customDiv = document.createElement("div");
        customDiv.id = TRONBOT.ids.welcomeMessage;
        customDiv.innerHTML = `
            <div id="${TRONBOT.ids.animatedGreeting}">
                <div>
                    <span>
                        ${greeting}, ${customerName}! Let's RISE!
                    </span>
                    <div id="${TRONBOT.ids.traxnFeature}">
                        ${randomFeature}
                    </div>
                    <a href="${CONFIG.aiAssistantUrl}" target="_blank">
                        <button id="${TRONBOT.ids.aiAssistantBtn}" class="${TRONBOT.classes.btn}">
                            Learn About Our AI Assistant
                        </button>
                    </a>
                </div>
                <div>
                    <img src="${CONFIG.animationGifUrl}" 
                        alt="AI Assistant Animation"/>
                </div>
            </div>
        `;
        
        const dashboardWrapper = document.querySelector(TRONBOT.selectors.dashboardWrapper);
        
        if (dashboardWrapper) {
            dashboardWrapper.prepend(customDiv);
            
            setTimeout(() => {
                const animatedGreeting = document.getElementById(TRONBOT.ids.animatedGreeting);
                if (animatedGreeting) {
                    animatedGreeting.style.opacity = "1";
                    animatedGreeting.style.transform = "translateY(0)";
                }
            }, 200);
        }
    }
    
    // --- Main Widgets Section ---
    function addWidgets() {
        // Only run on pages with the target body class
        if (!document.body.classList.contains(TRONBOT.selectors.bodyClass)) return;
        if (document.querySelector(`#${TRONBOT.ids.widgets}`)) return;
        
        const container = document.createElement('div');
        container.className = TRONBOT.classes.boxContainer;
        container.id = TRONBOT.ids.widgets;
        
        // Icon URLs
        const icons = {
            weather: "https://img.icons8.com/ios/50/1a3557/partly-cloudy-day--v1.png",
            tips: "https://img.icons8.com/ios/50/1a3557/idea.png",
            focus: "https://img.icons8.com/ios/50/1a3557/checked-checkbox.png",
            quickLinks: "https://img.icons8.com/ios/50/1a3557/link--v1.png"
        };
        
        // Create main widget boxes
        for (let i = 1; i <= 3; i++) {
            const box = document.createElement('div');
            box.className = TRONBOT.classes.box;
            
            if (i === 1) {
                // Weather Box
                box.innerHTML = `
                    <div class="${TRONBOT.classes.boxHeader}">
                        <img src="${icons.weather}" alt="Weather">
                        Current Weather
                    </div>
                    <div class="tronbot-weather-content">Loading...</div>
                `;
            } else if (i === 2) {
                // Tips Box
                box.innerHTML = `
                    <div class="${TRONBOT.classes.boxHeader}">
                        <img src="${icons.tips}" alt="Tip">
                        Daily Tips
                    </div>
                    <div class="tronbot-tip-content">Loading...</div>
                `;
            } else {
                // Focus/To-do Box
                box.innerHTML = `
                    <div class="${TRONBOT.classes.boxHeader} tronbot-todo-header">
                        <span class="tronbot-todo-header-left">
                            <img src="${icons.focus}" alt="Focus">
                            Today's Focus
                        </span>
                        <button class="${TRONBOT.classes.clearTasksBtn}">
                            Clear List
                        </button>
                    </div>
                    <div class="${TRONBOT.classes.progressBarBg}">
                        <div class="${TRONBOT.classes.progressBarFill}"></div>
                    </div>
                    <div class="${TRONBOT.classes.todoList}"></div>
                    <input class="${TRONBOT.classes.todoInput}" placeholder="Add task...">
                `;
            }
            
            container.appendChild(box);
        }
        
        // Add Quick Links box as the 4th box
        const quickLinksBox = document.createElement('div');
        quickLinksBox.className = TRONBOT.classes.box;
        quickLinksBox.innerHTML = `
            <div class="${TRONBOT.classes.boxHeader}">
                <img src="${icons.quickLinks}" alt="Links">
                Quick Links
            </div>
            <div class="${TRONBOT.classes.quickLinksList}">
                <!-- Links will be injected here -->
            </div>
        `;
        container.appendChild(quickLinksBox);
        
        setupQuickLinks(quickLinksBox);
        
        const dashboardWrapper = document.querySelector(TRONBOT.selectors.dashboardWrapper);
        
        if (dashboardWrapper) {
            // Insert after the welcome message if present, otherwise prepend
            const welcome = dashboardWrapper.querySelector(`#${TRONBOT.ids.welcomeMessage}`);
            if (welcome && welcome.nextSibling) {
                dashboardWrapper.insertBefore(container, welcome.nextSibling);
            } else {
                dashboardWrapper.prepend(container);
            }
            
            setupWeatherWidget(container.children[0]);
            setupTipsWidget(container.children[1]);
            setupTodoWidget(container.children[2]);
        }
    }
    
    // --- Quick Links Setup ---
    function setupQuickLinks(quickLinksBox) {
        const { domain, locationId } = getDomainAndLocationId();
        
        const quickLinks = [
            {
                heading: "New Lead",
                description: "Grow your database",
                url: `${domain}/v2/location/${locationId}/contacts/smart_list/All`
            },
            {
                heading: "Schedule",
                description: "Book new meeting",
                url: `${domain}/v2/location/${locationId}/calendars/view`
            },
            {
                heading: "Social Post",
                description: "Stay in front of your fans today!",
                url: `${domain}/v2/location/${locationId}/marketing/social-planner/planner`
            },
            {
                heading: "Email Blast",
                description: "The GOLD is in the follow up!",
                url: `${domain}/v2/location/${locationId}/marketing/emails/scheduled?pageNumber=1`
            }
        ];
        
        const quickLinksList = quickLinksBox.querySelector(`.${TRONBOT.classes.quickLinksList}`);
        const quickLinksIcons = {
            "New Lead": "https://img.icons8.com/ios/40/ffffff/add-user-group-man-man.png",
            "Schedule": "https://img.icons8.com/ios/40/ffffff/calendar--v1.png",
            "Social Post": "https://img.icons8.com/ios/40/ffffff/share-2.png",
            "Email Blast": "https://img.icons8.com/ios/40/ffffff/new-post.png"
        };
        
        quickLinksList.innerHTML = '';
        
        quickLinks.forEach(link => {
            const row = document.createElement('div');
            row.className = TRONBOT.classes.quickLinkRow;
            
            row.innerHTML = `
                <img src="${quickLinksIcons[link.heading] || ''}" alt="${link.heading}">
                <div>
                    <div>
                        ${link.heading}
                    </div>
                    <div>
                        ${link.description}
                    </div>
                </div>
            `;
            
            row.addEventListener('click', () => {
                window.open(link.url, '_blank');
            });
            
            row.addEventListener('mouseover', () => {
                row.style.background = 'linear-gradient(45deg, rgb(2, 168, 214) 5%, rgb(58, 74, 96) 90%)';
                row.style.boxShadow = '0 6px 18px rgba(42, 82, 152, 0.18)';
                row.style.transform = 'translateY(-2px) scale(1.015)';
            });
            
            row.addEventListener('mouseout', () => {
                row.style.background = 'linear-gradient(45deg, rgb(2, 168, 214) 5%, rgb(58, 74, 96) 90%)';
                row.style.boxShadow = '0 2px 10px rgba(30, 60,1 14, 0.10)';
                row.style.transform = 'none';
            });
            
            quickLinksList.appendChild(row);
        });
    }
    
    // --- Weather Widget Setup ---
    function setupWeatherWidget(weatherBox) {
        const apiKey = CONFIG.weatherApiKey;
        const units = CONFIG.temperatureUnits;
        const tempSymbol = units === 'imperial' ? '°F' : '°C';
        const hotThreshold = units === 'imperial' ? 86 : 30;
        const coldThreshold = units === 'imperial' ? 50 : 10;
        const weatherHeaderIcon = "https://img.icons8.com/ios/50/1a3557/partly-cloudy-day--v1.png";
        
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    
                    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`)
                        .then(response => response.json())
                        .then(data => {
                            const city = data.name;
                            const temperature = data.main.temp;
                            const weather = data.weather[0].main.toLowerCase();
                            const weatherDesc = data.weather[0].description;
                            
                            // Choose icon based on weather and temperature
                            let iconUrl = "";
                            let iconAlt = "";
                            
                            if (weather.includes("rain")) {
                                iconUrl = "https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/rainy-6.svg";
                                iconAlt = "Raining";
                            } else if (weather.includes("cloud")) {
                                iconUrl = "https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/cloudy-day-3.svg";
                                iconAlt = "Cloudy";
                            } else if (weather.includes("snow")) {
                                iconUrl = "https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/snowy-6.svg";
                                iconAlt = "Snow";
                            } else if (weather.includes("storm") || weather.includes("thunder")) {
                                iconUrl = "https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/thunder.svg";
                                iconAlt = "Storm";
                            } else if (temperature >= hotThreshold) {
                                iconUrl = "https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/day.svg";
                                iconAlt = "Hot/Sunny";
                            } else if (temperature <= coldThreshold) {
                                iconUrl = "https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/snowy-3.svg";
                                iconAlt = "Cold";
                            } else {
                                iconUrl = "https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/cloudy-day-1.svg";
                                iconAlt = "Partly Cloudy";
                            }
                            
                            weatherBox.innerHTML = `
                                <div class="${TRONBOT.classes.boxHeader}">
                                    <img src="${weatherHeaderIcon}" alt="Weather">
                                    Current Weather 
                                    <span class="tronbot-weather-location">${city}</span>
                                </div>
                                <div class="tronbot-weather-content">
                                    <img src="${iconUrl}" alt="${iconAlt}">
                                    <div class="tronbot-weather-temp">
                                        ${Math.round(temperature)}${tempSymbol}
                                    </div>
                                    <div>
                                        ${weatherDesc}
                                    </div>
                                </div>
                            `;
                        })
                        .catch(error => {
                            weatherBox.innerHTML = `
                                <div class="${TRONBOT.classes.boxHeader}">
                                    <img src="${weatherHeaderIcon}" alt="Weather">
                                    Current Weather
                                </div>
                                <div class="tronbot-weather-content">Unable to fetch weather data</div>
                            `;
                            console.error('Tronbot Weather Error:', error);
                        });
                },
                (error) => {
                    weatherBox.innerHTML = `
                        <div class="${TRONBOT.classes.boxHeader}">
                            <img src="${weatherHeaderIcon}" alt="Weather">
                            Current Weather
                        </div>
                        <div class="tronbot-weather-content">Location access denied</div>
                    `;
                    console.error('Tronbot Geolocation Error:', error);
                }
            );
        } else {
            weatherBox.innerHTML = `
                <div class="${TRONBOT.classes.boxHeader}">
                    <img src="${weatherHeaderIcon}" alt="Weather">
                    Current Weather
                </div>
                <div class="tronbot-weather-content">Geolocation not supported</div>
            `;
        }
    }
    
    // --- Tips Widget Setup ---
    function setupTipsWidget(tipsBox) {
        const tipsHeaderIcon = "https://img.icons8.com/ios/50/1a3557/idea.png";
        
        const tips = [
            {
                title: "Use Tags Effectively",
                description: `
                    1. Navigate to the 'Tags' section in the settings menu.<br>
                    2. Click on 'Create New Tag' and give it a meaningful name.<br>
                    3. Assign the tag to contacts by editing their profiles.<br>
                    4. Use tags to filter and segment your contacts for targeted campaigns.
                `
            },
            {
                title: "Automate Follow-Ups",
                description: `
                    1. Go to the 'Workflows' section in your dashboard.<br>
                    2. Create a new workflow and add a follow-up email or SMS action.<br>
                    3. Set the timing for the follow-up (e.g., 1 day after contact).<br>
                    4. Activate the workflow to automate your follow-ups.
                `
            },
            {
                title: "Track Campaign Performance",
                description: `
                    1. Navigate to the 'Analytics' section in your dashboard.<br>
                    2. Select the campaign you want to analyze.<br>
                    3. Review metrics like open rates, click-through rates, and conversions.<br>
                    4. Use the insights to optimize your future campaigns.
                `
            },
            {
                title: "Set Up Appointment Reminders",
                description: `
                    1. Go to the 'Appointments' section in your dashboard.<br>
                    2. Configure automated reminders for your appointments.<br>
                    3. Choose the timing (e.g., 1 hour before the appointment).<br>
                    4. Link the reminders to your calendar for seamless scheduling.
                `
            },
            {
                title: "Leverage Pipelines",
                description: `
                    1. Navigate to the 'Pipelines' section in your dashboard.<br>
                    2. Create a new pipeline and define its stages (e.g., Lead, Contacted, Closed).<br>
                    3. Add contacts to the pipeline and move them through the stages.<br>
                    4. Use pipelines to track and manage your sales process effectively.
                `
            }
        ];
        
        const randomTip = tips[Math.floor(Math.random() * tips.length)];
        
        tipsBox.innerHTML = `
            <div class="${TRONBOT.classes.boxHeader}">
                <img src="${tipsHeaderIcon}" alt="Tip">
                Daily Tips
            </div>
            <div class="tronbot-tip-highlight-bg">
                <div class="tronbot-tip-heading">
                    ${randomTip.title}
                </div>
                <div class="tronbot-tip-content">
                    ${randomTip.description}
                </div>
            </div>
        `;
    }
    
    // --- To-Do Widget Setup ---
    function setupTodoWidget(todoBox) {
        const todoList = todoBox.querySelector(`.${TRONBOT.classes.todoList}`);
        const todoInput = todoBox.querySelector(`.${TRONBOT.classes.todoInput}`);
        const progressBar = todoBox.querySelector(`.${TRONBOT.classes.progressBarFill}`);
        const clearBtn = todoBox.querySelector(`.${TRONBOT.classes.clearTasksBtn}`);
        
        // Add motivational message element
        let motivationMsg = todoBox.querySelector(`.${TRONBOT.classes.motivationMsg}`);
        if (!motivationMsg) {
            motivationMsg = document.createElement('div');
            motivationMsg.className = TRONBOT.classes.motivationMsg;
            progressBar.parentNode.after(motivationMsg);
        }
        
        // Add percentage label to progress bar
        const progressBarBg = todoBox.querySelector(`.${TRONBOT.classes.progressBarBg}`);
        let percentLabel = progressBarBg.querySelector(`.${TRONBOT.classes.progressPercentLabel}`);
        if (!percentLabel) {
            percentLabel = document.createElement('span');
            percentLabel.className = TRONBOT.classes.progressPercentLabel;
            progressBarBg.appendChild(percentLabel);
        }
        
        // Helper functions
        const getMotivation = (percent) => {
            if (percent === 0) return "Let's get started! 🚀";
            if (percent < 30) return "Keep going, you can do it! 💪";
            if (percent < 60) return "Nice progress, stay focused! ✨";
            if (percent < 100) return "Almost there, finish strong! 🏁";
            return "All done! Great job! 🎉";
        };
        
        const updateProgressAndMotivation = () => {
            const total = todoList.children.length;
            
            if (total === 0) {
                progressBar.style.width = '0%';
                motivationMsg.textContent = getMotivation(0);
                percentLabel.textContent = '0%';
                return;
            }
            
            const completed = Array.from(todoList.children)
                .filter(item => item.querySelector('input').checked).length;
            const percent = Math.round((completed / total) * 100);
            
            progressBar.style.width = percent + '%';
            motivationMsg.textContent = getMotivation(percent);
            percentLabel.textContent = percent + '%';
        };
        
        const saveTasks = () => {
            const tasks = Array.from(todoList.children).map(item => ({
                text: item.querySelector('span').textContent.trim(),
                checked: item.querySelector('input').checked
            }));
            localStorage.setItem(TRONBOT.storage.tasksKey, JSON.stringify(tasks));
            updateProgressAndMotivation();
        };
        
        const loadTasks = () => {
            todoList.innerHTML = '';
            const tasks = JSON.parse(localStorage.getItem(TRONBOT.storage.tasksKey)) || [];
            
            tasks.forEach(task => {
                if (task && typeof task.text === 'string' && task.text.trim() !== '') {
                    addTask(task.text, task.checked);
                }
            });
            
            updateProgressAndMotivation();
        };
        
        function addTask(task, checked = false) {
            if (!task || typeof task !== 'string' || task.trim() === '') return;
            
            const taskItem = document.createElement('div');
            taskItem.className = TRONBOT.classes.todoItem;
            taskItem.innerHTML = `
                <input type="checkbox" ${checked ? 'checked' : ''}>
                <span style="flex:1;${checked ? 'text-decoration: line-through; color: #aaa;' : ''}">
                    ${task}
                </span>
            `;
            
            const checkbox = taskItem.querySelector('input');
            const span = taskItem.querySelector('span');
            
            checkbox.addEventListener('change', () => {
                if (checkbox.checked) {
                    span.style.textDecoration = 'line-through';
                    span.style.color = '#aaa';
                } else {
                    span.style.textDecoration = '';
                    span.style.color = '';
                }
                saveTasks();
            });
            
            todoList.appendChild(taskItem);
            updateProgressAndMotivation();
        }
        
        // Event listeners
        todoInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && todoInput.value.trim() !== '') {
                addTask(todoInput.value.trim());
                todoInput.value = '';
                saveTasks();
            }
        });
        
        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                todoList.innerHTML = '';
                localStorage.removeItem(TRONBOT.storage.tasksKey);
                updateProgressAndMotivation();
            });
        }
        
        // Initialize
        loadTasks();
    }
    
    // --- Single DOM Observer (Performance Optimized) ---
    function initializeObserver() {
        let debounceTimer = null;
        
        const observer = new MutationObserver(() => {
            // Debounce to prevent excessive calls
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                if (document.body.classList.contains(TRONBOT.selectors.bodyClass)) {
                    addWelcomeMessage();
                    addWidgets();
                }
            }, 100);
        });
        
        observer.observe(document.body, { 
            childList: true, 
            subtree: true 
        });
        
        // Initial calls
        addWelcomeMessage();
        addWidgets();
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            injectTronbotCSS();
            initializeObserver();
        });
    } else {
        injectTronbotCSS();
        initializeObserver();
    }
    
})();