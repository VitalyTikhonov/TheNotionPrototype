"use strict";
const articleMarkup = `
		<article class="article">
			<img class="article__icon" src="images/icon.jpg">
        <h1 contenteditable="true" class="article__headline">Введите заголовок</h1>
        <hr class="article__fold-line">
      </article>
`;

// const clauseMarkup = `
//         <article class="article__clause">
//         </article>
// `;

const clauseTitleMarkup = `
          <div class="article__clause-item article_clause-item_type_title">
            <nav class="menu">
              <ul class="menu__items">
                <li class="menu__item">
                  <button class="menu__button menu__button_new-title"></button>
                </li>
                <li class="menu__item">
                  <button class="menu__button menu__button_new-paragraph"></button>
                </li>
                <li class="menu__item">
                  <button class="menu__button menu__button_delete-item"></button>
                </li>
                <li class="menu__item">
                  <button class="menu__button menu__button_move-item"></button>
                </li>
              </ul>
            </nav>
            <h2 contenteditable="true" class="article__clause-title" draggable="true">Введите название статьи</h2>
          </div>
`;

const clauseParagraphMarkup = `
          <div class="article__clause-item article_clause-item_type_paragraph">
            <nav class="menu">
              <ul  class="menu__items">
                <li class="menu__item">
                  <button class="menu__button menu__button_new-title"></button>
                </li>
                <li class="menu__item">
                  <button class="menu__button menu__button_new-paragraph"></button>
                </li>
                <li class="menu__item">
                  <button class="menu__button menu__button_delete-item"></button>
                </li>
                <li class="menu__item">
                  <button class="menu__button menu__button_move-item"></button>
                </li>
              </ul>
            </nav>
            <p contenteditable="true" class="article__clause-paragraph" draggable="true">Введите текст статьи</p>
          </div>
`;
