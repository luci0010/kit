<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

Cookie: <span id="cookie-value">{`${data.cookie}`}</span>
<span id="client-cookie-error">{data.client_cookie_error ?? ''}</span>
