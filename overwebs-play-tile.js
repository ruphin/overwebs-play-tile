import{GluonElement,html}from'../gluonjs/gluon.js';import'../overwebs-fonts/overwebs-fonts.js';const assetPath=window.modulesAssetPath&&window.modulesAssetPath('overwebs-play-tile')||'',imageUrl=(a)=>`url("${assetPath}/images/${a}")`;class OverwebsPlayTile extends GluonElement{get template(){return html`
    <style>
      :host {
        position: relative;
        height: calc(684 / 2560 * var(--overwebs-window-size, 1920px));
        width: calc(417 / 2560 * var(--overwebs-window-size, 1920px));
        background-size: contain;
        background-position: center top;
        background-repeat: no-repeat;
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;
        align-items: flex-end;
        justify-content: flex-end;
        transition: transform 0.1s linear;
        text-align: center;
      }

      :host([quick-play]) {
        background-image: ${imageUrl('quickPlay.png')};
      }

      :host([quick-play]) .icon {
        background-image: ${imageUrl('icon-quickPlay.png')};
      }

      :host([arcade]) {
        background-image: ${imageUrl('arcade.png')};
      }

      :host([arcade]) .icon {
        background-image: ${imageUrl('icon-arcade.png')};
      }

      :host([play-vs-ai]) {
        background-image: ${imageUrl('playVsAi.png')};
      }

      :host([play-vs-ai]) .icon {
        background-image: ${imageUrl('icon-playVsAi.png')};
      }

      :host([competitive-play]) {
        background-image: ${imageUrl('competitivePlay.png')};
      }

      :host([competitive-play]) .icon {
        background-image: ${imageUrl('icon-competitivePlay.png')};
      }

      :host([tutorial]) {
        background-image: ${imageUrl('tutorial.png')};
      }

      :host([tutorial]) .icon {
        background-image: ${imageUrl('icon-tutorial.png')};
      }

      :host([practice-range]) {
        background-image: ${imageUrl('practiceRange.png')};
      }

      :host([practice-range]) .icon {
        background-image: ${imageUrl('icon-practiceRange.png')};
      }

      :host([custom-game]) {
        background-image: ${imageUrl('customGame.png')};
      }

      :host([custom-game]) .icon {
        background-image: ${imageUrl('icon-customGame.png')};
      }

      :host([easy-ai]) {
        background-image: ${imageUrl('easyAI.png')};
      }

      :host([medium-ai]) {
        background-image: ${imageUrl('mediumAI.png')};
      }

      :host([hard-ai]) {
        background-image: ${imageUrl('hardAI.png')};
      }

      :host([info]) .hotkey,
      :host([info]) .info {
        display: flex;
      }

      :host(:hover) {
        box-shadow: 0 0 0 calc(8.5 / 1.1 / 2560 * var(--overwebs-window-size, 1920px)) #ffffff;
        transform: scale(1.1);
        z-index: 2;
      }

      .content {
        position: relative;
        height: calc(330 / 2560 * var(--overwebs-window-size, 1920px));
        width: 100%;
        display: flex;
        flex-flow: column;
        align-items: center;
        background: radial-gradient(ellipse farthest-corner at 50% -15%, #ebebee, #e4e4e8 50%, #d6d5dd);
      }

      .icon,
      ::slotted([slot='icon']) {
        margin-top: calc(30 / 2560 * var(--overwebs-window-size, 1920px));
        height: calc(68 / 2560 * var(--overwebs-window-size, 1920px));
        width: calc(68 / 2560 * var(--overwebs-window-size, 1920px));
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
      }

      ::slotted([slot='title']) {
        font-family: overwebs-big-noodle;
        color: #28354f;
        font-size: calc(68 / 2560 * var(--overwebs-window-size, 1920px));
        line-height: 1;
        text-transform: uppercase;
        transform: translateX(calc(-3/25.6*1vw));
        margin-top: calc(22 / 2560 * var(--overwebs-window-size, 1920px));
        user-select: none;
      }

      ::slotted([slot='description']) {
        width: 90%;
        font-family: overwebs-helvetica;
        color: #5e7ba5;
        font-size: calc(20 / 2560 * var(--overwebs-window-size, 1920px));
        line-height: 1.1;
        text-transform: uppercase;
        margin-top: calc(18 / 2560 * var(--overwebs-window-size, 1920px));
        user-select: none;
      }

      .hotkey {
        position: absolute;
        bottom: 0;
        right: calc(20 / 2560 * var(--overwebs-window-size, 1920px));
        height: calc(46 / 2560 * var(--overwebs-window-size, 1920px));
        width: calc(50 / 2560 * var(--overwebs-window-size, 1920px));
        background: #323e57;
        display: none;
        align-items: center;
        justify-content: center;
      }

      .rmb {
        width: calc(26 / 2560 * var(--overwebs-window-size, 1920px));
        height: calc(37 / 2560 * var(--overwebs-window-size, 1920px));
        background: url('images/rmb.png') center center no-repeat;
        background-size: contain;
      }

      .info {
        position: absolute;
        bottom: 0;
        right: calc(73 / 2560 * var(--overwebs-window-size, 1920px));
        height: calc(46 / 2560 * var(--overwebs-window-size, 1920px));
        width: calc(50 / 2560 * var(--overwebs-window-size, 1920px));
        background: #323e57;
        display: none;
        align-items: center;
        justify-content: center;
      }

      .i {
        width: calc(34 / 2560 * var(--overwebs-window-size, 1920px));
        height: calc(34 / 2560 * var(--overwebs-window-size, 1920px));
        line-height: calc(34 / 2560 * var(--overwebs-window-size, 1920px));
        font-size: calc(30 / 2560 * var(--overwebs-window-size, 1920px));
        font-family: overwebs-futura;
        color: #28354f;
        text-align: center;
        background: white;
        border-radius: 100%;
      }
    </style>
    <div class="content">
      <slot name="icon"><div class="icon"></div></slot>
      <slot name="title"></slot>
      <slot name="description"></slot>
      <div class="hotkey">
        <div class="rmb"></div>
      </div>
      <div class="info">
        <div class="i">i</div>
      </div>
    </div>`}}customElements.define(OverwebsPlayTile.is,OverwebsPlayTile);
//# sourceMappingURL=overwebs-play-tile.js.map
