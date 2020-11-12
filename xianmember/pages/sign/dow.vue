<script>
	import '../../jQuery.js'
	export default {
		data() {
			return {

			}
		},
		onLoad: function(options) {
			this.get_share()
		},
		methods: {
			get_share() {
				var user = getQueryString('user');
				var url = getQueryString('url');	
				
				$.ajax({
					type: "get",
					async: false,
					url: 'http://api.weixin139.com/jumpurl/index/get_url.html',
					data: {
						user: user,
						url: url
					},
					dataType: "jsonp",
					jsonp: "callback",
					jsonpCallback: "checkHandler",
					success: function(data) {
						window.location.href = data.url;
					},
				});
			},

			getQueryString(name) {
				var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
				var r = window.location.search.substr(1).match(reg);
				if (r != null) return unescape(r[2]);
				return null;
			}
		}
	}
</script>
