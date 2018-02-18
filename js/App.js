var handleSubmit= (e) =>{
  //e.preventDefault();
  $.ajax({
    type: 'POST',
    url: base_url + 'index.php/Welcome/do_upload',
    contentType: 'application/json; charset=utf-8'
  })
  .done(function (dataReturn) {
      console.log(dataReturn);
      alert("Upload done.");
  })
  .fail(function (jqXHR, textStatus, errorThrown) {
      console.log("fail to execute: " + errorThrown);
  })
  .always(function (data) {
  });
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>On this page calculation will be done</h1>
        <div class="row">
          <div class="col-md-7">
            <form id="test">
              <input type="file" action="base_url + 'index.php/Welcome/do_upload'" name="userfile" size="20" />
              <br /><br />
              <input class="btn btn-info" type="submit" value="Upload file" />
            </form>
          </div>
          <div class="col-md-5">
            <table class="table">
              <thead>
                <tr><th>Index</th><th>File name</th></tr>
              </thead>
              <tbody data-bind="foreach: filesArray">
                <tr>
                  <td data-bind="text: $index"></td>
                  <td data-bind="text: $data"></td>
                  <td><a class="btn btn-primary" data-bind="click: $parent.generateExcel">Generate</a></td>
                  <td><a class="btn btn-danger" data-bind="click: $parent.deleteFile">Delete</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
