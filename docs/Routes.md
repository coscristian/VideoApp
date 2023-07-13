## Routes

<table>
<tr>
<td> <b>Method</b> </td> <td> <b>Route</b> </td> <td> <b>Body</b> </td> <td> <b> Answer </b></td> 
</tr>
<tr>
<td> POST </td>
<td>/createVideo </td>
<td>

```json
{
    "_id":"1245457121",
    "user_id": "10154785231",
    "politic_id":"1087489628",
    "video": file
}
```

</td>
<td align="center">Status <b>200(OK)</b> || <b>500 (Not OK)</b></td>
</tr>
<tr>
<td> POST </td>
<td>/registerUser </td>
<td>

```json
{
    "_id": "10154785231",
    "name": "Cristian",
    "lastName": "Quesada Cossio",
    "email": "cris@..."
}
```

</td>
<td align="center">Status <b>200(OK)</b> || <b>500 (Not OK)</b></td>
</tr>
</tr>

<tr>
<td> POST </td>
<td>/registerPolitic </td>
<td>

```json
{
    "id": "10154785231",
    "name": "Cristian",
    "lastName": "Quesada Cossio",
    "email": "cris@...",
    "department": "Risaralda"
}
```

</td>
<td align="center">Status <b>200(OK)</b> || <b>500 (Not OK)</b></td>
</tr>

<tr>
<td> GET </td>
<td>/users </td>
<td align="center">

Get Users

</td>
<td>

```json
[{
    "id": "10154785231",
    "name": "Cristian",
    "lastName": "Quesada Cossio",
    "email": "cris@..."
}, ...]
```

</td>
</tr>
</tr>

<tr>
<td> GET </td>
<td>/politics </td>
<td align="center">

Get Politics

</td>
<td>

```json
[{
    "id": "10154785231",
    "name": "Cristian",
    "lastName": "Quesada Cossio",
    "email": "cris@..."
}, ...]
```

</td>
</tr>
</tr>

<tr>
<td> GET </td>
<td>/videos?userId </td>
<td align="center">

Get all videos by user

</td>
<td>

```json
[{
    "video": file,
    "date": "20/04/2023",
}, ...]
```

</td>
</tr>
</tr>

<tr>
<td> PATCH </td>
<td>/deleteUser </td>
<td>

```json
{
    "id": "10154785231",
    "email": "cris@..."
}
```

</td>
<td align="center">Status <b>200(OK)</b> || <b>500 (Not OK)</b></td>
</tr>

<tr>
<td> PATCH </td>
<td>/deletePolitic </td>
<td>

```json
{
    "id": "10154785231",
    "email": "cris@..."
}
```

</td>
<td align="center">Status <b>200(OK)</b> || <b>500 (Not OK)</b></td>
</tr>

</table>
