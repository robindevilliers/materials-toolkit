<div id="${id}" class="pagination-widget">
    ${content}
    <#if noContent>
        <div class="pagination-no-content no-content">No content.</div>
    </#if>

    <ul class="pagination">
        <li class="page-item <#if !previousPage?has_content >disabled</#if>">
            <form class="form-inline" method="get" action="${action}">
                <input type="hidden" name="bust" value="${bust}"/>
                <#if previousPage?has_content >
                    <input type="hidden" name="lIndex" value="${previousPage}">
                </#if>
                <button type="submit" aria-label="Previous" class="btn btn-link page-link"
                        <#if !previousPage?has_content >disabled</#if> name="previousPage">
                    <span aria-hidden="true">&laquo;</span>
                    <span class="sr-only">Previous</span>
                </button>
            </form>
        </li>

        <#list offeredPages as page>
            <li class="page-item <#if page == currentPage >active</#if>">
                <form class="form-inline" method="get" action="${action}">
                    <input type="hidden" name="bust" value="${bust}"/>
                    <input type="hidden" name="lIndex" value="${page}">
                    <button type="submit" aria-label="Page" class="page-link" name="page_${page?index}">
                        ${page + 1}
                    </button>
                </form>
            </li>
        </#list>

        <li class="page-item <#if !nextPage?has_content >disabled</#if>">
            <form class="form-inline" method="get" action="${action}">
                <input type="hidden" name="bust" value="${bust}"/>
                <#if nextPage?has_content >
                    <input type="hidden" name="lIndex" value="${nextPage}">
                </#if>
                <button type="submit" aria-label="Next" class="btn btn-link page-link"
                        <#if !nextPage?has_content >disabled</#if> name="nextPage">
                    <span aria-hidden="true">&raquo;</span>
                    <span class="sr-only">Next</span>
                </button>
            </form>
        </li>
        <#if hasErrors >
            <span id="error-message" class="error-message ml-3 align-self-center">Some pages have errors.</span>
        </#if>
    </ul>
</div>