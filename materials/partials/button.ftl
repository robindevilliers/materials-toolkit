<#if formRequired>
    <form action="${action}" style="${itemStyles}" method="post"
    enctype="application/x-www-form-urlencoded" class="operation-button">
    <input type="hidden" name="payload" value="${payload}">
</#if>
<div class="button-widget ${classes}" style="<#if !formRequired>${itemStyles}</#if>">
    <button id="${id}" type="submit" name="${name}"
            class="<#if representation == 'text' || representation == 'icon'>btn  ${btnClasses}</#if>"
            onclick="${testMode?string('alert(&quot;Buton clicked&quot;); event.preventDefault();','')}"
            <#if disabled??>disabled</#if>
    >
        ${content}
    </button>

    <#if (error)??>
        <span id="error-message-${name}" class="error-message">${error}</span>
    </#if>
</div>
<#if formRequired>
    </form>
</#if>