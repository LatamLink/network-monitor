var _reqInterval = 1000;

var blockProducerList = [
{
 "bp_name": "eosio",
 "organisation": "Latam Link",
 "location": "Buenos Aires, Argentina",
 "node_addr": "lacchain.eosio.cr",
 "port_http": "443",
 "port_ssl": "443",
 "p2p_addr": "boot.testnet.latamlink.io",
 "port_p2p": "9870"
},
{
 "bp_name": "proda",
 "organisation": "EOS Argentina",
 "location": "Buenos Aires, Argentina",
 "node_addr": "api2.testnet.lacchain.eosargentina.io",
 "port_http": "443",
 "port_ssl": "443",
 "p2p_addr": "p2p.testnet.lacchain.eosargentina.io",
 "port_p2p": "9870"
},
{
  "bp_name": "prodb",
  "organisation": "EOS Argentina",
  "location": "Buenos Aires, Argentina",
  "node_addr": "api2.testnet.lacchain.eosargentina.io",
  "port_http": "443",
  "port_ssl": "443",
  "p2p_addr": "p2p.testnet.lacchain.eosargentina.io",
  "port_p2p": "9870"
},
{
 "bp_name": "prodc",
 "organisation": "EOS Argentina",
 "location": "Buenos Aires, Argentina",
 "node_addr": "api2.testnet.lacchain.eosargentina.io",
 "port_http": "443",
 "port_ssl": "443",
 "p2p_addr": "p2p.testnet.lacchain.eosargentina.io",
 "port_p2p": "9870"
},
{
  "bp_name": "prodd",
  "organisation": "EOS Argentina",
  "location": "Buenos Aires, Argentina",
  "node_addr": "api2.testnet.lacchain.eosargentina.io",
  "port_http": "443",
  "port_ssl": "443",
  "p2p_addr": "p2p.testnet.lacchain.eosargentina.io",
  "port_p2p": "9870"
},
{
 "bp_name": "ar5",
 "organisation": "EOS Argentina",
 "location": "Buenos Aires, Argentina",
 "node_addr": "api2.testnet.lacchain.eosargentina.io",
 "port_http": "443",
 "port_ssl": "443",
 "p2p_addr": "p2p.testnet.lacchain.eosargentina.io",
 "port_p2p": "9870"
},
{
  "bp_name": "arsix",
  "organisation": "EOS Argentina",
  "location": "Buenos Aires, Argentina",
  "node_addr": "api2.testnet.lacchain.eosargentina.io",
  "port_http": "443",
  "port_ssl": "443",
  "p2p_addr": "p2p.testnet.lacchain.eosargentina.io",
  "port_p2p": "9870"
},
{
  "bp_name": "cr1",
  "organisation": "EOS Costa Rica",
  "location": "San Jose, Costa Rica",
  "node_addr": "lacchain.eosio.cr",
  "port_http": "443",
  "port_ssl": "443",
  "p2p_addr": "lacchain.eosio.cr",
  "port_p2p": "9876"
},
{
  "bp_name": "cr2",
  "organisation": "EOS Costa Rica",
  "location": "San Jose, Costa Rica",
  "node_addr": "lacchain.eosio.cr",
  "port_http": "443",
  "port_ssl": "443",
  "p2p_addr": "lacchain.eosio.cr",
  "port_p2p": "9876"
},
{
  "bp_name": "cr3",
  "organisation": "EOS Costa Rica",
  "location": "San Jose, Costa Rica",
  "node_addr": "lacchain.eosio.cr",
  "port_http": "443",
  "port_ssl": "443",
  "p2p_addr": "lacchain.eosio.cr",
  "port_p2p": "9876"
},
{
  "bp_name": "cr4",
  "organisation": "EOS Costa Rica",
  "location": "San Jose, Costa Rica",
  "node_addr": "lacchain.eosio.cr",
  "port_http": "443",
  "port_ssl": "443",
  "p2p_addr": "lacchain.eosio.cr",
  "port_p2p": "9876"
},
{
  "bp_name": "cr5",
  "organisation": "EOS Costa Rica",
  "location": "San Jose, Costa Rica",
  "node_addr": "lacchain.eosio.cr",
  "port_http": "443",
  "port_ssl": "443",
  "p2p_addr": "lacchain.eosio.cr",
  "port_p2p": "9876"
},
{
  "bp_name": "crsix",
  "organisation": "EOS Costa Rica",
  "location": "San Jose, Costa Rica",
  "node_addr": "lacchain.eosio.cr",
  "port_http": "443",
  "port_ssl": "443",
  "p2p_addr": "lacchain.eosio.cr",
  "port_p2p": "9876"
},
{
  "bp_name": "ve1",
  "organisation": "EOS Venezuela",
  "location": "Caracas, Venezuela",
  "node_addr": "lacchain.eosvenezuela.io",
  "port_http": "443",
  "port_ssl": "443",
  "p2p_addr": "lacchain.eosvenezuela.io",
  "port_p2p": "9876"
},
{
  "bp_name": "ve2",
  "organisation": "EOS Venezuela",
  "location": "Caracas, Venezuela",
  "node_addr": "lacchain.eosvenezuela.io",
  "port_http": "443",
  "port_ssl": "443",
  "p2p_addr": "lacchain.eosvenezuela.io",
  "port_p2p": "9876"
},
{
  "bp_name": "ve3",
  "organisation": "EOS Venezuela",
  "location": "Caracas, Venezuela",
  "node_addr": "lacchain.eosvenezuela.io",
  "port_http": "443",
  "port_ssl": "443",
  "p2p_addr": "lacchain.eosvenezuela.io",
  "port_p2p": "9876"
},
{
  "bp_name": "ve4",
  "organisation": "EOS Venezuela",
  "location": "Caracas, Venezuela",
  "node_addr": "lacchain.eosvenezuela.io",
  "port_http": "443",
  "port_ssl": "443",
  "p2p_addr": "lacchain.eosvenezuela.io",
  "port_p2p": "9876"
},
{
  "bp_name": "ve5",
  "organisation": "EOS Venezuela",
  "location": "Caracas, Venezuela",
  "node_addr": "lacchain.eosvenezuela.io",
  "port_http": "443",
  "port_ssl": "443",
  "p2p_addr": "lacchain.eosvenezuela.io",
  "port_p2p": "9876"
},
{
  "bp_name": "vesix",
  "organisation": "EOS Venezuela",
  "location": "Caracas, Venezuela",
  "node_addr": "lacchain.eosvenezuela.io",
  "port_http": "443",
  "port_ssl": "443",
  "p2p_addr": "lacchain.eosvenezuela.io",
  "port_p2p": "9876"
}
]
