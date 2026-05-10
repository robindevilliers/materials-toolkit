<div id="${id}" class="page-widget ${classes}" style="${containerStyles}">
    <#if displayPageHeader!false>
        <div class="header-panel">
            <div class="header">${header}</div>
        </div>
    </#if>
    <#if parkButton??>
        <div class="park-button" >
            ${parkButton}
        </div>
    </#if>
    ${content}
</div>
${cookieConsent!''}
