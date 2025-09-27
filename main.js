const main = document.querySelector('main'),
      headerNav = document.querySelector('header .navigation__header ul');

document.addEventListener('DOMContentLoaded', () => {
    headerNav.addEventListener('click', (e) => {
        switch(e.target.className) {
            case 'applicants':
                main.innerHTML = `
                <section class="main__applicans">
                    <h2 class="main__applicans-title">Почему именно мы?</h2>
                    <span>
                        Современный университет открывает двери для амбициозных абитуриентов, готовых к покорению профессиональных вершин. Мы создаем все условия для вашего развития и успешного будущего.
                    </span>
                </section>
                
                <section class="main__applicans">
                    <h2 class="main__applicans-title">Что вы получите, поступив к нам?</h2>
                    <ul>
                        <li>
                            <span class="title">Качественное образование от ведущих преподавателей</span>
                        </li>
                        <li>
                            <span class="title">Современную инфраструктуру для учебы и отдыха</span>
                        </li>
                        <li>
                            <span class="title">Практический опыт через стажировки и проекты</span>
                        </li>
                        <li>
                            <span class="title">Карьерные перспективы с поддержкой центра трудоустройства</span>
                        </li>
                    </ul>
                </section>
                `;
                break;
            case 'baccalaureate':
                main.innerHTML = `
                    <section class="main__baccalaureate">
                        <h2 class="main__baccalaureate_title">Что такое бакалавриат?</h2>
                        <span>
                        Бакалавриат — это первая ступень высшего образования, которая предоставляет студентам фундаментальные знания и практические навыки по выбранной специальности. По окончании обучения выпускники получают диплом бакалавра, который открывает широкие возможности для трудоустройства и дальнейшего образования.
                    </span>
                    </section>
                
                    <section class="main__baccalaureate">
                        <h2 class="main__baccalaureate_title">Преимущества обучения на бакалавриате</h2>
                        <ul>
                            <li>
                                <span class="title">Оптимальная длительность обучения — 4 года очного обучения</span>
                            </li>
                            <li>
                                <span class="title">Самодостаточное образование — диплом бакалавра признается как законченное высшее образование</span>
                            </li>
                            <li>
                                <span class="title">Широкие карьерные перспективы — возможность трудоустройства по специальности</span>
                            </li>
                            <li>
                                <span class="title">Гибкость выбора — возможность продолжить обучение в магистратуре или начать карьеру</span>
                            </li>
                        </ul>
                    </section>
                `;
                break;
            case 'magistracy':
                main.innerHTML = 'Магистратура';
                break;
            case 'postgraduate':
                main.innerHTML = 'Аспирантура';
                break;
            case 'special':
                main.innerHTML = 'Средне-специальное';
                break;
            case 'about':
                main.innerHTML = 'О нас';
                break;
        }
    })
})