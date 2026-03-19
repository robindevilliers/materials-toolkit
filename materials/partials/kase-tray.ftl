<div class="kase-tray-widget panel ${classes}" style="${itemStyles}">
    ${header}
    <div class="panel-body">
        <div class="kase-tray-body panel-content">
            <#list values as val>
                <div class="kase-tray-item panel-item">
                    <form action="${val.action}" method="post"
                            enctype="application/x-www-form-urlencoded">
                        <input type="hidden" name="_csrf" value="${_csrf}">
                        <input type="hidden" name="_checkpoint" value="${_checkpoint}">
                        <input type="hidden" name="payload" value="${val.payload}">
                        <input type="hidden" name="source" value="${source}">
                        <button id="kase-tray-item-${val.kaseId}" class="kase-tray-button" type="submit"
                                onclick="${testMode?string('alert(&quot;Kase Tray item clicked&quot;); event.preventDefault();','')}">
                            <span class="kase-tray-line">
                                <span class="kase-tray-workflow-title">${val.kaseId}</span>
                                <span class="kase-tray-date">${val.principal}</span>
                            </span>
                            <span class="kase-tray-line">
                                <span class="kase-tray-workflow-title">${val.workflowTitle}</span>
                                <span class="kase-tray-date">${val.date}</span>
                            </span>
                            <span class="kase-tray-line">
                                <span class="kase-tray-description">${val.workflowDescription}</span>
                            </span>
                        </button>
                    </form>
                </div>
            </#list>
            <#if !values?has_content>
                <div id="kase-tray-no-content" class="panel-no-content no-content">No Content</div>
            </#if>
        </div>
    </div>
    <div class="explorer-footer panel-footer kase-tray-footer">
        <form class="form-inline" method="get" action="${action}">
            <#list parameters as n, v>
                <input type="hidden" name="${n}" value="${v}"/>
            </#list>
            <div class="btn-group" role="group">
                <#if !disablePrevious >
                    <button type="submit" aria-label="Previous" class="btn btn-secondary" name="actPrevious"
                            onclick="${testMode?string('alert(&quot;Button clicked&quot;); event.preventDefault();','')}"
                    >
                        Previous
                    </button>
                </#if>
                <#if !disableNext >
                    <button type="submit" aria-label="Next" class="btn btn-secondary" name="actNext"
                            onclick="${testMode?string('alert(&quot;Button clicked&quot;); event.preventDefault();','')}"
                    >
                        Next
                    </button>
                </#if>
            </div>
        </form>
    </div>


</div>