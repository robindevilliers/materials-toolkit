<div id="${id}" class="explorer-widget explorer panel ${classes}" style="${itemStyles}">
    <div class="header panel-header">

        <form class="form-inline explorer-query" method="get" action="${action}" accept-charset="UTF-8">
            <div class="header-row">
                <div class="explorer-header-title">
                    Case Lookup
                </div>
            </div>
            <div class="header-row">
                <div class="spacer"></div>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <div class="input-group-text">Workflow</div>
                    </div>
                    <label class="sr-only" for="workflow">Workflow</label>
                    <select class="form-control" id="workflow" name="kWorkflow">
                        <option value=""></option>
                        <#list workflows as val>
                            <option <#if workflow == val.id>selected</#if> value="${val.id}">${val.title}</option>
                        </#list>
                    </select>

                    <label class="sr-only" for="principal">Case Principal</label>
                    <input autocomplete="off" type="text" class="form-control" name="kPrincipal" id="principal"
                            value="${principal}" placeholder="Case Principal">

                    <label class="sr-only" for="startDate">Start Date</label>
                    <div class="input-group-prepend">
                        <div class="input-group-text">Start Date</div>
                    </div>
                    <input autocomplete="off" type="date" class="form-control" name="kStartDate" id="startDate"
                            value="${startDate}" placeholder="Start Date">

                    <label class="sr-only" for="endDate">End Date</label>
                    <div class="input-group-prepend">
                        <div class="input-group-text">End Date</div>
                    </div>
                    <input autocomplete="off" type="date" class="form-control" name="kEndDate" id="endDate"
                            value="${endDate}" placeholder="End Date">

                    <div class="input-group-append">
                        <button type="submit" name="actSearch" class="btn btn-primary"
                                onclick="${testMode?string('alert(&quot;Button clicked&quot;); event.preventDefault();','')}">
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <#list parameters as n, v>
                <input type="hidden" name="${n}" value="${v}"/>
            </#list>
        </form>
    </div>

    <div class="explorer-body">
        <#if !values?has_content>
            <div id="explorer-no-content" class="explorer-no-content no-content">No Results</div>
        <#else>
            <div class="explorer-item-list">
                <#list values as val>
                    <a class="explorer-item-select" href="#${val.id}"
                            role="button" aria-expanded="false" aria-controls="${val.id}">
                        <span class="explorer-workflow-description">${val.dateTime}</span>
                        <span class="explorer-principal">${val.principal}</span>
                    </a>
                </#list>
            </div>
            <div class="explorer-item-detail" id="${id}">
                <#list values as val>
                    <div id="${val.id}" class="explorer-item" data-display="flex"
                            data-parent="#${id}">

                        <div class="explorer-line">
                            <span class="explorer-item-title title">${val.id}</span>
                            <span>${val.dateTime}</span>
                        </div>

                        <span class="explorer-line">
                            <span class="explorer-title">Case Principal</span>
                            <span>${val.principal}</span>
                        </span>

                        <span class="explorer-line">
                                <span class="explorer-title">Case Id </span>
                                <span>${val.kaseId}</span>
                            </span>

                        <span class="explorer-line">
                                <span class="explorer-title">Workflow </span>
                                <span></span>
                            </span>

                        <div class="explorer-title">${val.workflowTitle} (${val.workflowId})</div>

                        <div class="explorer-line">
                            <div class="explorer-description">
                                ${val.workflowDescription}
                            </div>
                        </div>

                        <form class="explorer-form" action="${val.action}" method="post"
                                enctype="application/x-www-form-urlencoded">
                            <input type="hidden" name="payload" value="${val.payload}">
                            <span class="explorer-button-line">
                                    <button class="btn btn-primary"
                                            id="explorer-item-${val.workflowId}"
                                            onclick="${testMode?string('alert(&quot;Button clicked&quot;); event.preventDefault();','')}"
                                            type="submit">
                                        Open
                                    </button>
                                </span>
                        </form>
                    </div>
                </#list>
            </div>
        </#if>
    </div>
    <div class="explorer-footer panel-footer">
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

        <form class="form-inline" method="get" action="${action}">
            <#list parameters as n, v>
                <input type="hidden" name="${n}" value="${v}"/>
            </#list>
            <div class="btn-group" role="group">
                <button type="submit" aria-label="Lookup username" class="btn btn-secondary"
                        name="actkLookupUser"
                        onclick="${testMode?string('alert(&quot;Button clicked&quot;); event.preventDefault();','')}">
                    Lookup principal
                </button>
            </div>
        </form>
    </div>
</div>
