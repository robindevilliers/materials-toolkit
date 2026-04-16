<form action="${action}" class="reset-password-panel" method="post" enctype="application/x-www-form-urlencoded"
        accept-charset="UTF-8" style="${itemStyles}">
    <input type="hidden" name="payload" value="${payload}">
    <div class="form-group">
        <label for="resetPasswordPasswordOnce" class="form-label label">Password</label>
        <input id="resetPasswordPasswordOnce" type="password" class="form-control" name="passwordOnce" placeholder="">
        <#if errors.passwordOnce??>
            <span class="error-message">${errors.passwordOnce}</span>
        <#else>
            <span class="form-text text-muted">Please enter a password.</span>
        </#if>
    </div>
    <div class="form-group ">
        <label for="resetPasswordPasswordTwice" class="form-label label">Password (Again)</label>
        <input id="resetPasswordPasswordTwice" type="password" class="form-control" name="passwordTwice" placeholder="">
        <#if errors.passwordTwice??>
            <span class="error-message">${errors.passwordTwice}</span>
        <#else>
            <span class="form-text text-muted">Please enter your password again.</span>
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