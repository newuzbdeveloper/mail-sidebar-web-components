const AppSidebarTemplate = document.createElement('template');
AppSidebarTemplate.innerHTML = `
<style>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.sidebar-buttons{
    display: flex;
}

app-sidebar-button{
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: .5rem 2rem;
    padding-right: 7rem;
    font-weight: 500;
    font-size: 1.5rem;
    text-align: center;
    border-radius: 1.3rem;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    transition: background-color 0.2s ease;
}

app-sidebar-button:hover{
    cursor: pointer;
    background-color: #d3cccc;
}

app-sidebar-button:active,
app-sidebar-button:focus{
    background-color: rgb(205, 230, 239);
    font-weight: 700;
}


</style>

<article class="sidebar-buttons">
   <app-sidebar-button text="Inbox" unreadCount = "0";>
      <slot slot="icon"></slot>
      <span><slot slot='text'></slot></span>
   </app-sidebar-button>
</article>
`


class AppSidebar extends HTMLElement{
    constructor (){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.shadowRoot.append(AppSidebarTemplate.content.cloneNode(true))
        const icon = this.getAttribute('icon');
        const text = this.getAttribute('text');

        this.shadowRoot.querySelector('slot').innerText = icon;
        this.shadowRoot.querySelector('span').innerText = text;
    }

}


window.customElements.define('app-button',AppSidebar)