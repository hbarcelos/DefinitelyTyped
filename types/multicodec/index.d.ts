// Type definitions for multicodec 0.5
// Project: https://github.com/multiformats/js-multicodec#readme
// Definitions by: Henrique Barcelos <https://github.com/hbarcelos> and Victor Santana <https://github.com/victorSantana09>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = multicodec;

type KeyOf<T> = keyof T;
type ValueOf<T> = T[keyof T];

declare namespace multicodec {
    type MulticodecCode = KeyOf<typeof print>;
    type MulticodecName = ValueOf<typeof print>;

    function addPrefix(multicodecStrOrCode: MulticodecCode | MulticodecName, data: Buffer): Buffer;
    function rmPrefix(data: Buffer): Buffer;
    function getCodec(prefixedData: Buffer): MulticodecName;
    function getName(codec: MulticodecCode): MulticodecName;
    function getNumber(name: MulticodecName): MulticodecCode;
    function getCode(prefixedData: Buffer): MulticodecCode;
    function getCodeVarint(codecName: MulticodecName): Buffer;
    function getVarint(code: MulticodecCode): number[];

    // serialization
    const PROTOBUF = 0x50;
    const CBOR = 0x51;
    const RLP = 0x60;
    const BENCODE = 0x63;
    const JSON = 0x0200;
    const MESSAGEPACK = 0x0201;

    // multiformat
    const MULTICODEC = 0x30;
    const MULTIHASH = 0x31;
    const MULTIADDR = 0x32;
    const MULTIBASE = 0x33;

    // multihash
    const IDENTITY = 0x00;
    const SHA1 = 0x11;
    const SHA2_256 = 0x12;
    const SHA2_512 = 0x13;
    const SHA3_512 = 0x14;
    const SHA3_384 = 0x15;
    const SHA3_256 = 0x16;
    const SHA3_224 = 0x17;
    const SHAKE_128 = 0x18;
    const SHAKE_256 = 0x19;
    const KECCAK_224 = 0x1a;
    const KECCAK_256 = 0x1b;
    const KECCAK_384 = 0x1c;
    const KECCAK_512 = 0x1d;
    const MURMUR3_128 = 0x22;
    const MURMUR3_32 = 0x23;
    const DBL_SHA2_256 = 0x56;
    const MD4 = 0xd4;
    const MD5 = 0xd5;
    const BMT = 0xd6;
    const X11 = 0x1100;
    const BLAKE2B_8 = 0xb201;
    const BLAKE2B_16 = 0xb202;
    const BLAKE2B_24 = 0xb203;
    const BLAKE2B_32 = 0xb204;
    const BLAKE2B_40 = 0xb205;
    const BLAKE2B_48 = 0xb206;
    const BLAKE2B_56 = 0xb207;
    const BLAKE2B_64 = 0xb208;
    const BLAKE2B_72 = 0xb209;
    const BLAKE2B_80 = 0xb20a;
    const BLAKE2B_88 = 0xb20b;
    const BLAKE2B_96 = 0xb20c;
    const BLAKE2B_104 = 0xb20d;
    const BLAKE2B_112 = 0xb20e;
    const BLAKE2B_120 = 0xb20f;
    const BLAKE2B_128 = 0xb210;
    const BLAKE2B_136 = 0xb211;
    const BLAKE2B_144 = 0xb212;
    const BLAKE2B_152 = 0xb213;
    const BLAKE2B_160 = 0xb214;
    const BLAKE2B_168 = 0xb215;
    const BLAKE2B_176 = 0xb216;
    const BLAKE2B_184 = 0xb217;
    const BLAKE2B_192 = 0xb218;
    const BLAKE2B_200 = 0xb219;
    const BLAKE2B_208 = 0xb21a;
    const BLAKE2B_216 = 0xb21b;
    const BLAKE2B_224 = 0xb21c;
    const BLAKE2B_232 = 0xb21d;
    const BLAKE2B_240 = 0xb21e;
    const BLAKE2B_248 = 0xb21f;
    const BLAKE2B_256 = 0xb220;
    const BLAKE2B_264 = 0xb221;
    const BLAKE2B_272 = 0xb222;
    const BLAKE2B_280 = 0xb223;
    const BLAKE2B_288 = 0xb224;
    const BLAKE2B_296 = 0xb225;
    const BLAKE2B_304 = 0xb226;
    const BLAKE2B_312 = 0xb227;
    const BLAKE2B_320 = 0xb228;
    const BLAKE2B_328 = 0xb229;
    const BLAKE2B_336 = 0xb22a;
    const BLAKE2B_344 = 0xb22b;
    const BLAKE2B_352 = 0xb22c;
    const BLAKE2B_360 = 0xb22d;
    const BLAKE2B_368 = 0xb22e;
    const BLAKE2B_376 = 0xb22f;
    const BLAKE2B_384 = 0xb230;
    const BLAKE2B_392 = 0xb231;
    const BLAKE2B_400 = 0xb232;
    const BLAKE2B_408 = 0xb233;
    const BLAKE2B_416 = 0xb234;
    const BLAKE2B_424 = 0xb235;
    const BLAKE2B_432 = 0xb236;
    const BLAKE2B_440 = 0xb237;
    const BLAKE2B_448 = 0xb238;
    const BLAKE2B_456 = 0xb239;
    const BLAKE2B_464 = 0xb23a;
    const BLAKE2B_472 = 0xb23b;
    const BLAKE2B_480 = 0xb23c;
    const BLAKE2B_488 = 0xb23d;
    const BLAKE2B_496 = 0xb23e;
    const BLAKE2B_504 = 0xb23f;
    const BLAKE2B_512 = 0xb240;
    const BLAKE2S_8 = 0xb241;
    const BLAKE2S_16 = 0xb242;
    const BLAKE2S_24 = 0xb243;
    const BLAKE2S_32 = 0xb244;
    const BLAKE2S_40 = 0xb245;
    const BLAKE2S_48 = 0xb246;
    const BLAKE2S_56 = 0xb247;
    const BLAKE2S_64 = 0xb248;
    const BLAKE2S_72 = 0xb249;
    const BLAKE2S_80 = 0xb24a;
    const BLAKE2S_88 = 0xb24b;
    const BLAKE2S_96 = 0xb24c;
    const BLAKE2S_104 = 0xb24d;
    const BLAKE2S_112 = 0xb24e;
    const BLAKE2S_120 = 0xb24f;
    const BLAKE2S_128 = 0xb250;
    const BLAKE2S_136 = 0xb251;
    const BLAKE2S_144 = 0xb252;
    const BLAKE2S_152 = 0xb253;
    const BLAKE2S_160 = 0xb254;
    const BLAKE2S_168 = 0xb255;
    const BLAKE2S_176 = 0xb256;
    const BLAKE2S_184 = 0xb257;
    const BLAKE2S_192 = 0xb258;
    const BLAKE2S_200 = 0xb259;
    const BLAKE2S_208 = 0xb25a;
    const BLAKE2S_216 = 0xb25b;
    const BLAKE2S_224 = 0xb25c;
    const BLAKE2S_232 = 0xb25d;
    const BLAKE2S_240 = 0xb25e;
    const BLAKE2S_248 = 0xb25f;
    const BLAKE2S_256 = 0xb260;
    const SKEIN256_8 = 0xb301;
    const SKEIN256_16 = 0xb302;
    const SKEIN256_24 = 0xb303;
    const SKEIN256_32 = 0xb304;
    const SKEIN256_40 = 0xb305;
    const SKEIN256_48 = 0xb306;
    const SKEIN256_56 = 0xb307;
    const SKEIN256_64 = 0xb308;
    const SKEIN256_72 = 0xb309;
    const SKEIN256_80 = 0xb30a;
    const SKEIN256_88 = 0xb30b;
    const SKEIN256_96 = 0xb30c;
    const SKEIN256_104 = 0xb30d;
    const SKEIN256_112 = 0xb30e;
    const SKEIN256_120 = 0xb30f;
    const SKEIN256_128 = 0xb310;
    const SKEIN256_136 = 0xb311;
    const SKEIN256_144 = 0xb312;
    const SKEIN256_152 = 0xb313;
    const SKEIN256_160 = 0xb314;
    const SKEIN256_168 = 0xb315;
    const SKEIN256_176 = 0xb316;
    const SKEIN256_184 = 0xb317;
    const SKEIN256_192 = 0xb318;
    const SKEIN256_200 = 0xb319;
    const SKEIN256_208 = 0xb31a;
    const SKEIN256_216 = 0xb31b;
    const SKEIN256_224 = 0xb31c;
    const SKEIN256_232 = 0xb31d;
    const SKEIN256_240 = 0xb31e;
    const SKEIN256_248 = 0xb31f;
    const SKEIN256_256 = 0xb320;
    const SKEIN512_8 = 0xb321;
    const SKEIN512_16 = 0xb322;
    const SKEIN512_24 = 0xb323;
    const SKEIN512_32 = 0xb324;
    const SKEIN512_40 = 0xb325;
    const SKEIN512_48 = 0xb326;
    const SKEIN512_56 = 0xb327;
    const SKEIN512_64 = 0xb328;
    const SKEIN512_72 = 0xb329;
    const SKEIN512_80 = 0xb32a;
    const SKEIN512_88 = 0xb32b;
    const SKEIN512_96 = 0xb32c;
    const SKEIN512_104 = 0xb32d;
    const SKEIN512_112 = 0xb32e;
    const SKEIN512_120 = 0xb32f;
    const SKEIN512_128 = 0xb330;
    const SKEIN512_136 = 0xb331;
    const SKEIN512_144 = 0xb332;
    const SKEIN512_152 = 0xb333;
    const SKEIN512_160 = 0xb334;
    const SKEIN512_168 = 0xb335;
    const SKEIN512_176 = 0xb336;
    const SKEIN512_184 = 0xb337;
    const SKEIN512_192 = 0xb338;
    const SKEIN512_200 = 0xb339;
    const SKEIN512_208 = 0xb33a;
    const SKEIN512_216 = 0xb33b;
    const SKEIN512_224 = 0xb33c;
    const SKEIN512_232 = 0xb33d;
    const SKEIN512_240 = 0xb33e;
    const SKEIN512_248 = 0xb33f;
    const SKEIN512_256 = 0xb340;
    const SKEIN512_264 = 0xb341;
    const SKEIN512_272 = 0xb342;
    const SKEIN512_280 = 0xb343;
    const SKEIN512_288 = 0xb344;
    const SKEIN512_296 = 0xb345;
    const SKEIN512_304 = 0xb346;
    const SKEIN512_312 = 0xb347;
    const SKEIN512_320 = 0xb348;
    const SKEIN512_328 = 0xb349;
    const SKEIN512_336 = 0xb34a;
    const SKEIN512_344 = 0xb34b;
    const SKEIN512_352 = 0xb34c;
    const SKEIN512_360 = 0xb34d;
    const SKEIN512_368 = 0xb34e;
    const SKEIN512_376 = 0xb34f;
    const SKEIN512_384 = 0xb350;
    const SKEIN512_392 = 0xb351;
    const SKEIN512_400 = 0xb352;
    const SKEIN512_408 = 0xb353;
    const SKEIN512_416 = 0xb354;
    const SKEIN512_424 = 0xb355;
    const SKEIN512_432 = 0xb356;
    const SKEIN512_440 = 0xb357;
    const SKEIN512_448 = 0xb358;
    const SKEIN512_456 = 0xb359;
    const SKEIN512_464 = 0xb35a;
    const SKEIN512_472 = 0xb35b;
    const SKEIN512_480 = 0xb35c;
    const SKEIN512_488 = 0xb35d;
    const SKEIN512_496 = 0xb35e;
    const SKEIN512_504 = 0xb35f;
    const SKEIN512_512 = 0xb360;
    const SKEIN1024_8 = 0xb361;
    const SKEIN1024_16 = 0xb362;
    const SKEIN1024_24 = 0xb363;
    const SKEIN1024_32 = 0xb364;
    const SKEIN1024_40 = 0xb365;
    const SKEIN1024_48 = 0xb366;
    const SKEIN1024_56 = 0xb367;
    const SKEIN1024_64 = 0xb368;
    const SKEIN1024_72 = 0xb369;
    const SKEIN1024_80 = 0xb36a;
    const SKEIN1024_88 = 0xb36b;
    const SKEIN1024_96 = 0xb36c;
    const SKEIN1024_104 = 0xb36d;
    const SKEIN1024_112 = 0xb36e;
    const SKEIN1024_120 = 0xb36f;
    const SKEIN1024_128 = 0xb370;
    const SKEIN1024_136 = 0xb371;
    const SKEIN1024_144 = 0xb372;
    const SKEIN1024_152 = 0xb373;
    const SKEIN1024_160 = 0xb374;
    const SKEIN1024_168 = 0xb375;
    const SKEIN1024_176 = 0xb376;
    const SKEIN1024_184 = 0xb377;
    const SKEIN1024_192 = 0xb378;
    const SKEIN1024_200 = 0xb379;
    const SKEIN1024_208 = 0xb37a;
    const SKEIN1024_216 = 0xb37b;
    const SKEIN1024_224 = 0xb37c;
    const SKEIN1024_232 = 0xb37d;
    const SKEIN1024_240 = 0xb37e;
    const SKEIN1024_248 = 0xb37f;
    const SKEIN1024_256 = 0xb380;
    const SKEIN1024_264 = 0xb381;
    const SKEIN1024_272 = 0xb382;
    const SKEIN1024_280 = 0xb383;
    const SKEIN1024_288 = 0xb384;
    const SKEIN1024_296 = 0xb385;
    const SKEIN1024_304 = 0xb386;
    const SKEIN1024_312 = 0xb387;
    const SKEIN1024_320 = 0xb388;
    const SKEIN1024_328 = 0xb389;
    const SKEIN1024_336 = 0xb38a;
    const SKEIN1024_344 = 0xb38b;
    const SKEIN1024_352 = 0xb38c;
    const SKEIN1024_360 = 0xb38d;
    const SKEIN1024_368 = 0xb38e;
    const SKEIN1024_376 = 0xb38f;
    const SKEIN1024_384 = 0xb390;
    const SKEIN1024_392 = 0xb391;
    const SKEIN1024_400 = 0xb392;
    const SKEIN1024_408 = 0xb393;
    const SKEIN1024_416 = 0xb394;
    const SKEIN1024_424 = 0xb395;
    const SKEIN1024_432 = 0xb396;
    const SKEIN1024_440 = 0xb397;
    const SKEIN1024_448 = 0xb398;
    const SKEIN1024_456 = 0xb399;
    const SKEIN1024_464 = 0xb39a;
    const SKEIN1024_472 = 0xb39b;
    const SKEIN1024_480 = 0xb39c;
    const SKEIN1024_488 = 0xb39d;
    const SKEIN1024_496 = 0xb39e;
    const SKEIN1024_504 = 0xb39f;
    const SKEIN1024_512 = 0xb3a0;
    const SKEIN1024_520 = 0xb3a1;
    const SKEIN1024_528 = 0xb3a2;
    const SKEIN1024_536 = 0xb3a3;
    const SKEIN1024_544 = 0xb3a4;
    const SKEIN1024_552 = 0xb3a5;
    const SKEIN1024_560 = 0xb3a6;
    const SKEIN1024_568 = 0xb3a7;
    const SKEIN1024_576 = 0xb3a8;
    const SKEIN1024_584 = 0xb3a9;
    const SKEIN1024_592 = 0xb3aa;
    const SKEIN1024_600 = 0xb3ab;
    const SKEIN1024_608 = 0xb3ac;
    const SKEIN1024_616 = 0xb3ad;
    const SKEIN1024_624 = 0xb3ae;
    const SKEIN1024_632 = 0xb3af;
    const SKEIN1024_640 = 0xb3b0;
    const SKEIN1024_648 = 0xb3b1;
    const SKEIN1024_656 = 0xb3b2;
    const SKEIN1024_664 = 0xb3b3;
    const SKEIN1024_672 = 0xb3b4;
    const SKEIN1024_680 = 0xb3b5;
    const SKEIN1024_688 = 0xb3b6;
    const SKEIN1024_696 = 0xb3b7;
    const SKEIN1024_704 = 0xb3b8;
    const SKEIN1024_712 = 0xb3b9;
    const SKEIN1024_720 = 0xb3ba;
    const SKEIN1024_728 = 0xb3bb;
    const SKEIN1024_736 = 0xb3bc;
    const SKEIN1024_744 = 0xb3bd;
    const SKEIN1024_752 = 0xb3be;
    const SKEIN1024_760 = 0xb3bf;
    const SKEIN1024_768 = 0xb3c0;
    const SKEIN1024_776 = 0xb3c1;
    const SKEIN1024_784 = 0xb3c2;
    const SKEIN1024_792 = 0xb3c3;
    const SKEIN1024_800 = 0xb3c4;
    const SKEIN1024_808 = 0xb3c5;
    const SKEIN1024_816 = 0xb3c6;
    const SKEIN1024_824 = 0xb3c7;
    const SKEIN1024_832 = 0xb3c8;
    const SKEIN1024_840 = 0xb3c9;
    const SKEIN1024_848 = 0xb3ca;
    const SKEIN1024_856 = 0xb3cb;
    const SKEIN1024_864 = 0xb3cc;
    const SKEIN1024_872 = 0xb3cd;
    const SKEIN1024_880 = 0xb3ce;
    const SKEIN1024_888 = 0xb3cf;
    const SKEIN1024_896 = 0xb3d0;
    const SKEIN1024_904 = 0xb3d1;
    const SKEIN1024_912 = 0xb3d2;
    const SKEIN1024_920 = 0xb3d3;
    const SKEIN1024_928 = 0xb3d4;
    const SKEIN1024_936 = 0xb3d5;
    const SKEIN1024_944 = 0xb3d6;
    const SKEIN1024_952 = 0xb3d7;
    const SKEIN1024_960 = 0xb3d8;
    const SKEIN1024_968 = 0xb3d9;
    const SKEIN1024_976 = 0xb3da;
    const SKEIN1024_984 = 0xb3db;
    const SKEIN1024_992 = 0xb3dc;
    const SKEIN1024_1000 = 0xb3dd;
    const SKEIN1024_1008 = 0xb3de;
    const SKEIN1024_1016 = 0xb3df;
    const SKEIN1024_1024 = 0xb3e0;

    // multiaddr
    const IP4 = 0x04;
    const TCP = 0x06;
    const DCCP = 0x21;
    const IP6 = 0x29;
    const IP6ZONE = 0x2a;
    const DNS = 0x35;
    const DNS4 = 0x36;
    const DNS6 = 0x37;
    const DNSADDR = 0x38;
    const SCTP = 0x84;
    const UDP = 0x0111;
    const P2P_WEBRTC_STAR = 0x0113;
    const P2P_WEBRTC_DIRECT = 0x0114;
    const P2P_STARDUST = 0x0115;
    const P2P_CIRCUIT = 0x0122;
    const UDT = 0x012d;
    const UTP = 0x012e;
    const UNIX = 0x0190;
    const P2P = 0x01a5;
    const IPFS = 0x01a5;
    const HTTPS = 0x01bb;
    const ONION = 0x01bc;
    const ONION3 = 0x01bd;
    const GARLIC64 = 0x01be;
    const GARLIC32 = 0x01bf;
    const QUIC = 0x01cc;
    const WS = 0x01dd;
    const WSS = 0x01de;
    const P2P_WEBSOCKET_STAR = 0x01df;
    const HTTP = 0x01e0;

    // ipld
    const RAW = 0x55;
    const DAG_PB = 0x70;
    const DAG_CBOR = 0x71;
    const LIBP2P_KEY = 0x72;
    const GIT_RAW = 0x78;
    const TORRENT_INFO = 0x7b;
    const TORRENT_FILE = 0x7c;
    const LEOFCOIN_BLOCK = 0x81;
    const LEOFCOIN_TX = 0x82;
    const LEOFCOIN_PR = 0x83;
    const ETH_BLOCK = 0x90;
    const ETH_BLOCK_LIST = 0x91;
    const ETH_TX_TRIE = 0x92;
    const ETH_TX = 0x93;
    const ETH_TX_RECEIPT_TRIE = 0x94;
    const ETH_TX_RECEIPT = 0x95;
    const ETH_STATE_TRIE = 0x96;
    const ETH_ACCOUNT_SNAPSHOT = 0x97;
    const ETH_STORAGE_TRIE = 0x98;
    const BITCOIN_BLOCK = 0xb0;
    const BITCOIN_TX = 0xb1;
    const ZCASH_BLOCK = 0xc0;
    const ZCASH_TX = 0xc1;
    const STELLAR_BLOCK = 0xd0;
    const STELLAR_TX = 0xd1;
    const DECRED_BLOCK = 0xe0;
    const DECRED_TX = 0xe1;
    const DASH_BLOCK = 0xf0;
    const DASH_TX = 0xf1;
    const SWARM_MANIFEST = 0xfa;
    const SWARM_FEED = 0xfb;
    const DAG_JSON = 0x0129;

    // namespace
    const PATH = 0x2f;
    const IPLD_NS = 0xe2;
    const IPFS_NS = 0xe3;
    const SWARM_NS = 0xe4;
    const IPNS_NS = 0xe5;
    const ZERONET = 0xe6;

    // key
    const ED25519_PUB = 0xed;

    // holochain
    const HOLOCHAIN_ADR_V0 = 0x807124;
    const HOLOCHAIN_ADR_V1 = 0x817124;
    const HOLOCHAIN_KEY_V0 = 0x947124;
    const HOLOCHAIN_KEY_V1 = 0x957124;
    const HOLOCHAIN_SIG_V0 = 0xa27124;
    const HOLOCHAIN_SIG_V1 = 0xa37124;

    const print: {
        // serialization
        0x50: 'protobuf';
        0x51: 'cbor';
        0x60: 'rlp';
        0x63: 'bencode';
        0x0200: 'json';
        0x0201: 'messagepack';

        // multiformat
        0x30: 'multicodec';
        0x31: 'multihash';
        0x32: 'multiaddr';
        0x33: 'multibase';

        // multihash
        0x00: 'identity';
        0x11: 'sha1';
        0x12: 'sha2-256';
        0x13: 'sha2-512';
        0x14: 'sha3-512';
        0x15: 'sha3-384';
        0x16: 'sha3-256';
        0x17: 'sha3-224';
        0x18: 'shake-128';
        0x19: 'shake-256';
        0x1a: 'keccak-224';
        0x1b: 'keccak-256';
        0x1c: 'keccak-384';
        0x1d: 'keccak-512';
        0x22: 'murmur3-128';
        0x23: 'murmur3-32';
        0x56: 'dbl-sha2-256';
        0xd4: 'md4';
        0xd5: 'md5';
        0xd6: 'bmt';
        0x1100: 'x11';
        0xb201: 'blake2b-8';
        0xb202: 'blake2b-16';
        0xb203: 'blake2b-24';
        0xb204: 'blake2b-32';
        0xb205: 'blake2b-40';
        0xb206: 'blake2b-48';
        0xb207: 'blake2b-56';
        0xb208: 'blake2b-64';
        0xb209: 'blake2b-72';
        0xb20a: 'blake2b-80';
        0xb20b: 'blake2b-88';
        0xb20c: 'blake2b-96';
        0xb20d: 'blake2b-104';
        0xb20e: 'blake2b-112';
        0xb20f: 'blake2b-120';
        0xb210: 'blake2b-128';
        0xb211: 'blake2b-136';
        0xb212: 'blake2b-144';
        0xb213: 'blake2b-152';
        0xb214: 'blake2b-160';
        0xb215: 'blake2b-168';
        0xb216: 'blake2b-176';
        0xb217: 'blake2b-184';
        0xb218: 'blake2b-192';
        0xb219: 'blake2b-200';
        0xb21a: 'blake2b-208';
        0xb21b: 'blake2b-216';
        0xb21c: 'blake2b-224';
        0xb21d: 'blake2b-232';
        0xb21e: 'blake2b-240';
        0xb21f: 'blake2b-248';
        0xb220: 'blake2b-256';
        0xb221: 'blake2b-264';
        0xb222: 'blake2b-272';
        0xb223: 'blake2b-280';
        0xb224: 'blake2b-288';
        0xb225: 'blake2b-296';
        0xb226: 'blake2b-304';
        0xb227: 'blake2b-312';
        0xb228: 'blake2b-320';
        0xb229: 'blake2b-328';
        0xb22a: 'blake2b-336';
        0xb22b: 'blake2b-344';
        0xb22c: 'blake2b-352';
        0xb22d: 'blake2b-360';
        0xb22e: 'blake2b-368';
        0xb22f: 'blake2b-376';
        0xb230: 'blake2b-384';
        0xb231: 'blake2b-392';
        0xb232: 'blake2b-400';
        0xb233: 'blake2b-408';
        0xb234: 'blake2b-416';
        0xb235: 'blake2b-424';
        0xb236: 'blake2b-432';
        0xb237: 'blake2b-440';
        0xb238: 'blake2b-448';
        0xb239: 'blake2b-456';
        0xb23a: 'blake2b-464';
        0xb23b: 'blake2b-472';
        0xb23c: 'blake2b-480';
        0xb23d: 'blake2b-488';
        0xb23e: 'blake2b-496';
        0xb23f: 'blake2b-504';
        0xb240: 'blake2b-512';
        0xb241: 'blake2s-8';
        0xb242: 'blake2s-16';
        0xb243: 'blake2s-24';
        0xb244: 'blake2s-32';
        0xb245: 'blake2s-40';
        0xb246: 'blake2s-48';
        0xb247: 'blake2s-56';
        0xb248: 'blake2s-64';
        0xb249: 'blake2s-72';
        0xb24a: 'blake2s-80';
        0xb24b: 'blake2s-88';
        0xb24c: 'blake2s-96';
        0xb24d: 'blake2s-104';
        0xb24e: 'blake2s-112';
        0xb24f: 'blake2s-120';
        0xb250: 'blake2s-128';
        0xb251: 'blake2s-136';
        0xb252: 'blake2s-144';
        0xb253: 'blake2s-152';
        0xb254: 'blake2s-160';
        0xb255: 'blake2s-168';
        0xb256: 'blake2s-176';
        0xb257: 'blake2s-184';
        0xb258: 'blake2s-192';
        0xb259: 'blake2s-200';
        0xb25a: 'blake2s-208';
        0xb25b: 'blake2s-216';
        0xb25c: 'blake2s-224';
        0xb25d: 'blake2s-232';
        0xb25e: 'blake2s-240';
        0xb25f: 'blake2s-248';
        0xb260: 'blake2s-256';
        0xb301: 'skein256-8';
        0xb302: 'skein256-16';
        0xb303: 'skein256-24';
        0xb304: 'skein256-32';
        0xb305: 'skein256-40';
        0xb306: 'skein256-48';
        0xb307: 'skein256-56';
        0xb308: 'skein256-64';
        0xb309: 'skein256-72';
        0xb30a: 'skein256-80';
        0xb30b: 'skein256-88';
        0xb30c: 'skein256-96';
        0xb30d: 'skein256-104';
        0xb30e: 'skein256-112';
        0xb30f: 'skein256-120';
        0xb310: 'skein256-128';
        0xb311: 'skein256-136';
        0xb312: 'skein256-144';
        0xb313: 'skein256-152';
        0xb314: 'skein256-160';
        0xb315: 'skein256-168';
        0xb316: 'skein256-176';
        0xb317: 'skein256-184';
        0xb318: 'skein256-192';
        0xb319: 'skein256-200';
        0xb31a: 'skein256-208';
        0xb31b: 'skein256-216';
        0xb31c: 'skein256-224';
        0xb31d: 'skein256-232';
        0xb31e: 'skein256-240';
        0xb31f: 'skein256-248';
        0xb320: 'skein256-256';
        0xb321: 'skein512-8';
        0xb322: 'skein512-16';
        0xb323: 'skein512-24';
        0xb324: 'skein512-32';
        0xb325: 'skein512-40';
        0xb326: 'skein512-48';
        0xb327: 'skein512-56';
        0xb328: 'skein512-64';
        0xb329: 'skein512-72';
        0xb32a: 'skein512-80';
        0xb32b: 'skein512-88';
        0xb32c: 'skein512-96';
        0xb32d: 'skein512-104';
        0xb32e: 'skein512-112';
        0xb32f: 'skein512-120';
        0xb330: 'skein512-128';
        0xb331: 'skein512-136';
        0xb332: 'skein512-144';
        0xb333: 'skein512-152';
        0xb334: 'skein512-160';
        0xb335: 'skein512-168';
        0xb336: 'skein512-176';
        0xb337: 'skein512-184';
        0xb338: 'skein512-192';
        0xb339: 'skein512-200';
        0xb33a: 'skein512-208';
        0xb33b: 'skein512-216';
        0xb33c: 'skein512-224';
        0xb33d: 'skein512-232';
        0xb33e: 'skein512-240';
        0xb33f: 'skein512-248';
        0xb340: 'skein512-256';
        0xb341: 'skein512-264';
        0xb342: 'skein512-272';
        0xb343: 'skein512-280';
        0xb344: 'skein512-288';
        0xb345: 'skein512-296';
        0xb346: 'skein512-304';
        0xb347: 'skein512-312';
        0xb348: 'skein512-320';
        0xb349: 'skein512-328';
        0xb34a: 'skein512-336';
        0xb34b: 'skein512-344';
        0xb34c: 'skein512-352';
        0xb34d: 'skein512-360';
        0xb34e: 'skein512-368';
        0xb34f: 'skein512-376';
        0xb350: 'skein512-384';
        0xb351: 'skein512-392';
        0xb352: 'skein512-400';
        0xb353: 'skein512-408';
        0xb354: 'skein512-416';
        0xb355: 'skein512-424';
        0xb356: 'skein512-432';
        0xb357: 'skein512-440';
        0xb358: 'skein512-448';
        0xb359: 'skein512-456';
        0xb35a: 'skein512-464';
        0xb35b: 'skein512-472';
        0xb35c: 'skein512-480';
        0xb35d: 'skein512-488';
        0xb35e: 'skein512-496';
        0xb35f: 'skein512-504';
        0xb360: 'skein512-512';
        0xb361: 'skein1024-8';
        0xb362: 'skein1024-16';
        0xb363: 'skein1024-24';
        0xb364: 'skein1024-32';
        0xb365: 'skein1024-40';
        0xb366: 'skein1024-48';
        0xb367: 'skein1024-56';
        0xb368: 'skein1024-64';
        0xb369: 'skein1024-72';
        0xb36a: 'skein1024-80';
        0xb36b: 'skein1024-88';
        0xb36c: 'skein1024-96';
        0xb36d: 'skein1024-104';
        0xb36e: 'skein1024-112';
        0xb36f: 'skein1024-120';
        0xb370: 'skein1024-128';
        0xb371: 'skein1024-136';
        0xb372: 'skein1024-144';
        0xb373: 'skein1024-152';
        0xb374: 'skein1024-160';
        0xb375: 'skein1024-168';
        0xb376: 'skein1024-176';
        0xb377: 'skein1024-184';
        0xb378: 'skein1024-192';
        0xb379: 'skein1024-200';
        0xb37a: 'skein1024-208';
        0xb37b: 'skein1024-216';
        0xb37c: 'skein1024-224';
        0xb37d: 'skein1024-232';
        0xb37e: 'skein1024-240';
        0xb37f: 'skein1024-248';
        0xb380: 'skein1024-256';
        0xb381: 'skein1024-264';
        0xb382: 'skein1024-272';
        0xb383: 'skein1024-280';
        0xb384: 'skein1024-288';
        0xb385: 'skein1024-296';
        0xb386: 'skein1024-304';
        0xb387: 'skein1024-312';
        0xb388: 'skein1024-320';
        0xb389: 'skein1024-328';
        0xb38a: 'skein1024-336';
        0xb38b: 'skein1024-344';
        0xb38c: 'skein1024-352';
        0xb38d: 'skein1024-360';
        0xb38e: 'skein1024-368';
        0xb38f: 'skein1024-376';
        0xb390: 'skein1024-384';
        0xb391: 'skein1024-392';
        0xb392: 'skein1024-400';
        0xb393: 'skein1024-408';
        0xb394: 'skein1024-416';
        0xb395: 'skein1024-424';
        0xb396: 'skein1024-432';
        0xb397: 'skein1024-440';
        0xb398: 'skein1024-448';
        0xb399: 'skein1024-456';
        0xb39a: 'skein1024-464';
        0xb39b: 'skein1024-472';
        0xb39c: 'skein1024-480';
        0xb39d: 'skein1024-488';
        0xb39e: 'skein1024-496';
        0xb39f: 'skein1024-504';
        0xb3a0: 'skein1024-512';
        0xb3a1: 'skein1024-520';
        0xb3a2: 'skein1024-528';
        0xb3a3: 'skein1024-536';
        0xb3a4: 'skein1024-544';
        0xb3a5: 'skein1024-552';
        0xb3a6: 'skein1024-560';
        0xb3a7: 'skein1024-568';
        0xb3a8: 'skein1024-576';
        0xb3a9: 'skein1024-584';
        0xb3aa: 'skein1024-592';
        0xb3ab: 'skein1024-600';
        0xb3ac: 'skein1024-608';
        0xb3ad: 'skein1024-616';
        0xb3ae: 'skein1024-624';
        0xb3af: 'skein1024-632';
        0xb3b0: 'skein1024-640';
        0xb3b1: 'skein1024-648';
        0xb3b2: 'skein1024-656';
        0xb3b3: 'skein1024-664';
        0xb3b4: 'skein1024-672';
        0xb3b5: 'skein1024-680';
        0xb3b6: 'skein1024-688';
        0xb3b7: 'skein1024-696';
        0xb3b8: 'skein1024-704';
        0xb3b9: 'skein1024-712';
        0xb3ba: 'skein1024-720';
        0xb3bb: 'skein1024-728';
        0xb3bc: 'skein1024-736';
        0xb3bd: 'skein1024-744';
        0xb3be: 'skein1024-752';
        0xb3bf: 'skein1024-760';
        0xb3c0: 'skein1024-768';
        0xb3c1: 'skein1024-776';
        0xb3c2: 'skein1024-784';
        0xb3c3: 'skein1024-792';
        0xb3c4: 'skein1024-800';
        0xb3c5: 'skein1024-808';
        0xb3c6: 'skein1024-816';
        0xb3c7: 'skein1024-824';
        0xb3c8: 'skein1024-832';
        0xb3c9: 'skein1024-840';
        0xb3ca: 'skein1024-848';
        0xb3cb: 'skein1024-856';
        0xb3cc: 'skein1024-864';
        0xb3cd: 'skein1024-872';
        0xb3ce: 'skein1024-880';
        0xb3cf: 'skein1024-888';
        0xb3d0: 'skein1024-896';
        0xb3d1: 'skein1024-904';
        0xb3d2: 'skein1024-912';
        0xb3d3: 'skein1024-920';
        0xb3d4: 'skein1024-928';
        0xb3d5: 'skein1024-936';
        0xb3d6: 'skein1024-944';
        0xb3d7: 'skein1024-952';
        0xb3d8: 'skein1024-960';
        0xb3d9: 'skein1024-968';
        0xb3da: 'skein1024-976';
        0xb3db: 'skein1024-984';
        0xb3dc: 'skein1024-992';
        0xb3dd: 'skein1024-1000';
        0xb3de: 'skein1024-1008';
        0xb3df: 'skein1024-1016';
        0xb3e0: 'skein1024-1024';

        // multiaddr
        0x04: 'ip4';
        0x06: 'tcp';
        0x21: 'dccp';
        0x29: 'ip6';
        0x2a: 'ip6zone';
        0x35: 'dns';
        0x36: 'dns4';
        0x37: 'dns6';
        0x38: 'dnsaddr';
        0x84: 'sctp';
        0x0111: 'udp';
        0x0113: 'p2p-webrtc-star';
        0x0114: 'p2p-webrtc-direct';
        0x0115: 'p2p-stardust';
        0x0122: 'p2p-circuit';
        0x012d: 'udt';
        0x012e: 'utp';
        0x0190: 'unix';
        0x01a5: 'p2p';
        0x01bb: 'https';
        0x01bc: 'onion';
        0x01bd: 'onion3';
        0x01be: 'garlic64';
        0x01bf: 'garlic32';
        0x01cc: 'quic';
        0x01dd: 'ws';
        0x01de: 'wss';
        0x01df: 'p2p-websocket-star';
        0x01e0: 'http';

        // ipld
        0x55: 'raw';
        0x70: 'dag-pb';
        0x71: 'dag-cbor';
        0x72: 'libp2p-key';
        0x78: 'git-raw';
        0x7b: 'torrent-info';
        0x7c: 'torrent-file';
        0x81: 'leofcoin-block';
        0x82: 'leofcoin-tx';
        0x83: 'leofcoin-pr';
        0x90: 'eth-block';
        0x91: 'eth-block-list';
        0x92: 'eth-tx-trie';
        0x93: 'eth-tx';
        0x94: 'eth-tx-receipt-trie';
        0x95: 'eth-tx-receipt';
        0x96: 'eth-state-trie';
        0x97: 'eth-account-snapshot';
        0x98: 'eth-storage-trie';
        0xb0: 'bitcoin-block';
        0xb1: 'bitcoin-tx';
        0xc0: 'zcash-block';
        0xc1: 'zcash-tx';
        0xd0: 'stellar-block';
        0xd1: 'stellar-tx';
        0xe0: 'decred-block';
        0xe1: 'decred-tx';
        0xf0: 'dash-block';
        0xf1: 'dash-tx';
        0xfa: 'swarm-manifest';
        0xfb: 'swarm-feed';
        0x0129: 'dag-json';

        // namespace
        0x2f: 'path';
        0xe2: 'ipld-ns';
        0xe3: 'ipfs-ns';
        0xe4: 'swarm-ns';
        0xe5: 'ipns-ns';
        0xe6: 'zeronet';

        // key
        0xed: 'ed25519-pub';

        // holochain
        0x807124: 'holochain-adr-v0';
        0x817124: 'holochain-adr-v1';
        0x947124: 'holochain-key-v0';
        0x957124: 'holochain-key-v1';
        0xa27124: 'holochain-sig-v0';
        0xa37124: 'holochain-sig-v1';
    };
}
