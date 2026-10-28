<div class="carousel-item ${active?string('active','')} ${classes}" <#if interval??>data-bs-interval="${interval}"</#if>>
    <#if src??><img class="d-block w-100 h-100" src="${src}" alt="${src}"/></#if>
    <div class="carousel-caption" style="${containerStyles}">
        ${content}
    </div>
</div>