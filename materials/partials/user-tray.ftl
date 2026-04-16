<div id="${id!}" class="user-tray-widget panel ${classes}  <#if customisePanel>customise-panel</#if>"
        style="${itemStyles}">
    ${header}
    <div class="panel-body">
        <div class="user-tray-body panel-content">
            <#list values as val>
                <div class="user-tray-item panel-item">

                    <#if customisePanel>
                        <div id="user-tray-item-${val.username}" style="${containerStyles}">
                            ${val.html}
                        </div>
                    <#else>
                        <form action="${val.action}" method="post" enctype="application/x-www-form-urlencoded">
                            <input type="hidden" name="payload" value="${val.payload}">
                            <button id="user-tray-item-${val.username}" class="user-tray-button" type="submit"
                                    onclick="${testMode?string('alert(&quot;Kase Tray item clicked&quot;); event.preventDefault();','')}">
                                <span class="user-tray-line">
                                    <span class="user-tray-title">${val.username}</span>
                                    <span class="user-tray-date">${val.lastLoggedIn}</span>
                                </span>
                                <span class="user-tray-line">
                                    <span class="user-tray-title">${val.title} ${val.firstName} ${val.lastName}</span>
                                    <span class="user-tray-date">${val.dateOfBirth}</span>
                                </span>
                                <span class="user-tray-line">
                                    <span class="user-tray-title"></span>
                                    <span class="user-tray-date">${val.email}</span>
                                </span>
                            </button>
                        </form>
                    </#if>
                </div>
            </#list>
            <#if !values?has_content>
                <div id="user-tray-no-content" class="panel-no-content no-content">No Content</div>
            </#if>
        </div>
    </div>
    <#if !collapseFooter >
        <div class="panel-footer">
            <div class="pagination">
                <div class="page-item <#if !previousPage?has_content >disabled</#if>">
                    <form class="form-inline" method="get" action="${action}">
                        <input type="hidden" name="bust" value="${bust}"/>
                        <#if previousPage?has_content >
                            <input type="hidden" name="fIndex" value="${previousPage}">
                        </#if>
                        <button type="submit" aria-label="Previous" class="btn btn-link page-link"
                                <#if !previousPage?has_content >disabled</#if> name="lPage"
                                onclick="${testMode?string('alert(&quot;Button clicked&quot;); event.preventDefault();','')}"
                        >
                            <span aria-hidden="true">&laquo;</span>
                            <span class="sr-only">Previous</span>
                        </button>
                    </form>
                </div>

                <#list offeredPages as page>
                    <div class="page-item <#if page == currentPage >active</#if>">
                        <form class="form-inline" method="get" action="${action}">
                            <input type="hidden" name="bust" value="${bust}"/>
                            <input type="hidden" name="fIndex" value="${page}">
                            <button type="submit" aria-label="Page" class="page-link" name="lPage"
                                    onclick="${testMode?string('alert(&quot;Button clicked&quot;); event.preventDefault();','')}"
                            >
                                ${page + 1}
                            </button>
                        </form>
                    </div>
                </#list>

                <div class="page-item <#if !nextPage?has_content >disabled</#if>">
                    <form class="form-inline" method="get" action="${action}">
                        <input type="hidden" name="bust" value="${bust}"/>
                        <#if nextPage?has_content >
                            <input type="hidden" name="fIndex" value="${nextPage}">
                        </#if>
                        <button type="submit" aria-label="Next" class="btn btn-link page-link"
                                onclick="${testMode?string('alert(&quot;Button clicked&quot;); event.preventDefault();','')}"
                                <#if !nextPage?has_content >disabled</#if> name="lPage">
                            <span aria-hidden="true">&raquo;</span>
                            <span class="sr-only">Next</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </#if>
</div>