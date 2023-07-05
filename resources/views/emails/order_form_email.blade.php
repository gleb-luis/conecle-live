@extends('layouts.email_layout')

@section('content')

<div class="row ">
	<div class="col-md-12 col-sm-12 notification-title">
	<p style="word-break: break-all; white-space: pre-wrap;">
{{ $com_name }}<br/>
{{ $name }}様<br/>
{!! $content !!}<br/>
<a href="http://18.183.29.25/client/order/detail?id={{ $order_form_id }}">http://18.183.29.25/client/order/detail?id={{ $order_form_id }}</a><br/><br/>
{!! $address_info !!}
  </p>
	</div>
</div>
@endsection