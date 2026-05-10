<form id="${id}" method="POST" action="${action}" accept-charset="UTF-8">
    <input type="hidden" name="_csrf" value="${_csrf}">
    <input type="hidden" name="_checkpoint" value="${_checkpoint}">
    <div class="form-widget ${classes}" style="${containerStyles}">
        <#if displayFormHeader!false>
            <div class="header-panel">
                <div class="header">${header}</div>
            </div>
        </#if>
        <#if showParkButton!false>
            <div class="park-button">
                <div class="button-widget">
                    <button type="submit" name="__button:park:" class="btn btn-md btn-default">
                        Parking Q
                    </button>
                </div>
            </div>
        </#if>
        ${content}
    </div>
</form>
${cookieConsent!''}