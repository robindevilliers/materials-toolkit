<div class="message-tray-widget panel ${classes}" style="${itemStyles}">
    ${header}
    <div class="panel-body">
        <div class="message-tray-body panel-content">
            <#list values as val>
                <div class="message-tray-item panel-item">
                    <form action="${val.action}" method="post"
                            enctype="application/x-www-form-urlencoded">
                        <input type="hidden" name="_csrf" value="${_csrf}">
                        <input type="hidden" name="_checkpoint" value="${_checkpoint}">
                        <input type="hidden" name="payload" value="${val.payload}">
                        <input type="hidden" name="source" value="${source}">
                        <button id="message-tray-item-${val.workflowId}-${val.wizardId}" class="message-tray-button" type="submit"
                                onclick="${testMode?string('alert(&quot;Tray item clicked&quot;); event.preventDefault();','')}">
                        <span class="message-tray-line">
                            <span class="message-tray-wizard-title">${val.wizardTitle}</span>
                            <span class="message-tray-date">${val.date}</span>
                        </span>
                            <span class="message-tray-line">
                            <span class="message-tray-description">${val.wizardDescription}</span>
                        </span>
                        </button>
                    </form>
                </div>
            </#list>
            <#if !values?has_content>
                <div id="message-tray-no-content" class="panel-no-content no-content">No Content</div>
            </#if>
        </div>
    </div>
</div>