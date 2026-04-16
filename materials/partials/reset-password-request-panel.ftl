<form action="${action}" class="reset-password-request-panel" method="post" enctype="application/x-www-form-urlencoded"
        accept-charset="UTF-8">
    <input type="hidden" name="payload" value="${payload}">
    <div class="form-group">
        <label for="resetPasswordEmail" class="form-label label">Email Address</label>
        <input id="resetPasswordEmail" type="text" name="email" class="form-control" value="${(email)!}" placeholder="">
        <#if errors.email??>
            <span class="error-message">${errors.email}</span>
        <#else>
            <span class="form-text text-muted">Please enter your email address.</span>
        </#if>
    </div>
    <div class="button-panel">
        <button class="btn btn-primary float-end mx-1" type="submit" name="resetPassword"
                onclick="${testMode?string('alert(&quot;Next clicked&quot;); event.preventDefault();','')}">Next
        </button>
        <button class="btn btn-secondary float-end mx-1" type="submit" name="cancel"
                onclick="${testMode?string('alert(&quot;Cancel clicked&quot;); event.preventDefault();','')}">Cancel
        </button>
    </div>
</form>