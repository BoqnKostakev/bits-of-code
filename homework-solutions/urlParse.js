// Write a script that parses an URL address given in 
// the format: 
// http://www.devbg.org/forum/index.php
// [protocol]://[server]/[resource]

var address = 'http://www.devbg.org/forum/index.php';

function parseAddress (addr) {
	var parsed = {},
		urlLen = addr.length,
		protocolSep = addr.indexOf('://'),
		serverSep = addr.indexOf('/', protocolSep + 3),
		protocol = addr.slice(0, protocolSep),
		server = addr.slice((protocolSep + 3), serverSep),
		resource = addr.slice(serverSep, urlLen);

		// parsed.protocol = protocol;
		// parsed.server = server;
		// parsed.resource = resource;

		// return parsed;

		// this is better written...
		return {protocol: protocol, server: server, resource: resource};
}


console.log(parseAddress(address));