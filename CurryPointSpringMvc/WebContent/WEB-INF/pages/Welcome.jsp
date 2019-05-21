<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
	<%@taglib prefix="c" uri="http://www.springframework.org/tags/form"%>
<%@taglib prefix="s" uri="http://java.sun.com/jsp/jstl/core" %>
	
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<link
	href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
	rel="stylesheet">
<title>Welcome</title>
</head>
<body style="background-image: url('https://media.istockphoto.com/photos/last-straw-picture-id516329534'); background-repeat: no-repeat">
	<br />
	<div class="row">
		<div class="container">
			<div class="row">
				<div class="col-xs-4 col-sm-4 col-md-4"></div>

				<div class="col-xs-12 col-sm-8 col-md-4 ">
					<h3 class="text-center text-info">Curry Shops</h3>
					<br />
					<div class="panel panel-default">
						<div class="panel-heading">
							<h3 class="panel-title">
								<small></small>
							</h3>
						</div>
						<div>
							<a href="add" class="btn btn-primary" type="button">Add
								Vendor</a>
						</div>
						<div class="form-group">
						<a href="search" class="btn btn-primary" type="submit">Search By City</a>
						</div>

						<div class="form-group">
						 <a href="searchby"	class="btn btn-primary" type="submit">Search By Vendor Name</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>



</body>
</html>