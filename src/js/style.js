$(function() {
	var $infos = $('#infos');

	$('#load').click(function() {
		$infos.append(create());
	});
});

function create() {
	return `
		<div class="info">
			<time data-time="2017.01">約 1 年之前</time>
			<i class="fa fa-list-alt" aria-hidden="true"></i>

			<div class="card">
				<img src="img/background.jpg">
				<h3>Nintendo Switch</h3>
				<p>今天要開箱的不是電腦也不是一般 3C 器材，而次去年大家廣泛討論的Nintendo次世代主機Nintendo Switch！這款主機相信大家多多少…</p>
									<div>
					<a href="">Detail</a>
				</div>
			</div>
		</div>`;
}