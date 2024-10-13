<%
dim fname, city
fnmae = Request.Form("name")
city = Request.Form("city")
response.Write("Dear " & fname & ". ")
Reponse.Write("Hpoe you live well in " & city & ".")
%>