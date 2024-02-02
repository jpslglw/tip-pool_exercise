describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('No new server on submitServerInfo() should be addedwith empty input', function () {
    serverNameInput.value = '';
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0); // making sure that allServers is empty if there is no input value
  });

  it('should update inner table with the server Alice, tip average', function () {
    submitServerInfo();
    updateServerTable();

    let tdList = document.querySelectorAll('#serverTable tbody tr td');

    expect(tdList.length).toEqual(2); // table entries should be correct
    expect(tdList[0].innerText).toEqual('Alice');
    expect(tdList[1].innerText).toEqual('$0.00'); // table entries to be correct too
  });

  afterEach(function() {
    serverId = 0;
    serverTbody.innerHTML = '';
    allServers = {};
  });
});
