var Mappersmith = require('mappersmith');
var CachedGatewayFactory = require('mappersmith-cached-gateway');

var JQueryGateway = Mappersmith.JQueryGateway;
var SessionCache = CachedGatewayFactory.SessionStorageCacheStore;
var LocalCache = CachedGatewayFactory.LocalStorageCacheStore;

var SessionGateway =  CachedGatewayFactory.createCachedGateway(JQueryGateway, SessionCache);
var LocalGateway =  CachedGatewayFactory.createCachedGateway(JQueryGateway, LocalCache);

var manifest = require('./manifest');

module.exports = {
  SessionClient: Mappersmith.forge(manifest, SessionGateway),
  LocalClient: Mappersmith.forge(manifest, LocalGateway),
  getGateway: function(clientName) {
    return /^session/i.test(clientName) ? SessionGateway : LocalGateway;
  }
}
