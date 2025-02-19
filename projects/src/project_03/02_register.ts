export const hdl = `/**
 * 16-bit register:
 * If load[t] == 1 then out[t+1] = in[t]
 * else out does not change
 */

CHIP Register {
    IN in[16], load;
    OUT out[16];

    PARTS:
}`;
export const tst =
  `output-list time%S1.4.1 in%D1.6.1 load%B2.1.2 out%D1.6.1;\n` +
  [
    [0, 0],
    [0, 1],
    [-32123, 0],
    [11111, 0],
    [-32123, 1],
    [-32123, 1],
    [-32123, 0],
    [12345, 1],
    [0, 0],
    [0, 1],
  ]
    .map(
      ([inn, load]) =>
        `set in ${inn}, set load ${load}, tick, output; tock, output;`
    )
    .join("\n") +
  "\n" +
  [
    "%B0000000000000001",
    "%B0000000000000010",
    "%B0000000000000100",
    "%B0000000000001000",
    "%B0000000000010000",
    "%B0000000000100000",
    "%B0000000001000000",
    "%B0000000010000000",
    "%B0000000100000000",
    "%B0000001000000000",
    "%B0000010000000000",
    "%B0000100000000000",
    "%B0001000000000000",
    "%B0010000000000000",
    "%B0100000000000000",
    "%B1000000000000000",
    "%B1111111111111110",
    "%B1111111111111101",
    "%B1111111111111011",
    "%B1111111111110111",
    "%B1111111111101111",
    "%B1111111111011111",
    "%B1111111110111111",
    "%B1111111101111111",
    "%B1111111011111111",
    "%B1111110111111111",
    "%B1111101111111111",
    "%B1111011111111111",
    "%B1110111111111111",
    "%B1101111111111111",
    "%B1011111111111111",
    "%B0111111111111111",
  ]
    .map(
      (n) =>
        `set in ${n}, set load 0, tick, output; tock, output; set load 1, tick, output; tock, output;`
    )
    .join("\n");

export const cmp = `| time |   in   |load |  out   |
| 0+   |      0 |  0  |      0 |
| 1    |      0 |  0  |      0 |
| 1+   |      0 |  1  |      0 |
| 2    |      0 |  1  |      0 |
| 2+   | -32123 |  0  |      0 |
| 3    | -32123 |  0  |      0 |
| 3+   |  11111 |  0  |      0 |
| 4    |  11111 |  0  |      0 |
| 4+   | -32123 |  1  |      0 |
| 5    | -32123 |  1  | -32123 |
| 5+   | -32123 |  1  | -32123 |
| 6    | -32123 |  1  | -32123 |
| 6+   | -32123 |  0  | -32123 |
| 7    | -32123 |  0  | -32123 |
| 7+   |  12345 |  1  | -32123 |
| 8    |  12345 |  1  |  12345 |
| 8+   |      0 |  0  |  12345 |
| 9    |      0 |  0  |  12345 |
| 9+   |      0 |  1  |  12345 |
| 10   |      0 |  1  |      0 |
| 10+  |      1 |  0  |      0 |
| 11   |      1 |  0  |      0 |
| 11+  |      1 |  1  |      0 |
| 12   |      1 |  1  |      1 |
| 12+  |      2 |  0  |      1 |
| 13   |      2 |  0  |      1 |
| 13+  |      2 |  1  |      1 |
| 14   |      2 |  1  |      2 |
| 14+  |      4 |  0  |      2 |
| 15   |      4 |  0  |      2 |
| 15+  |      4 |  1  |      2 |
| 16   |      4 |  1  |      4 |
| 16+  |      8 |  0  |      4 |
| 17   |      8 |  0  |      4 |
| 17+  |      8 |  1  |      4 |
| 18   |      8 |  1  |      8 |
| 18+  |     16 |  0  |      8 |
| 19   |     16 |  0  |      8 |
| 19+  |     16 |  1  |      8 |
| 20   |     16 |  1  |     16 |
| 20+  |     32 |  0  |     16 |
| 21   |     32 |  0  |     16 |
| 21+  |     32 |  1  |     16 |
| 22   |     32 |  1  |     32 |
| 22+  |     64 |  0  |     32 |
| 23   |     64 |  0  |     32 |
| 23+  |     64 |  1  |     32 |
| 24   |     64 |  1  |     64 |
| 24+  |    128 |  0  |     64 |
| 25   |    128 |  0  |     64 |
| 25+  |    128 |  1  |     64 |
| 26   |    128 |  1  |    128 |
| 26+  |    256 |  0  |    128 |
| 27   |    256 |  0  |    128 |
| 27+  |    256 |  1  |    128 |
| 28   |    256 |  1  |    256 |
| 28+  |    512 |  0  |    256 |
| 29   |    512 |  0  |    256 |
| 29+  |    512 |  1  |    256 |
| 30   |    512 |  1  |    512 |
| 30+  |   1024 |  0  |    512 |
| 31   |   1024 |  0  |    512 |
| 31+  |   1024 |  1  |    512 |
| 32   |   1024 |  1  |   1024 |
| 32+  |   2048 |  0  |   1024 |
| 33   |   2048 |  0  |   1024 |
| 33+  |   2048 |  1  |   1024 |
| 34   |   2048 |  1  |   2048 |
| 34+  |   4096 |  0  |   2048 |
| 35   |   4096 |  0  |   2048 |
| 35+  |   4096 |  1  |   2048 |
| 36   |   4096 |  1  |   4096 |
| 36+  |   8192 |  0  |   4096 |
| 37   |   8192 |  0  |   4096 |
| 37+  |   8192 |  1  |   4096 |
| 38   |   8192 |  1  |   8192 |
| 38+  |  16384 |  0  |   8192 |
| 39   |  16384 |  0  |   8192 |
| 39+  |  16384 |  1  |   8192 |
| 40   |  16384 |  1  |  16384 |
| 40+  | -32768 |  0  |  16384 |
| 41   | -32768 |  0  |  16384 |
| 41+  | -32768 |  1  |  16384 |
| 42   | -32768 |  1  | -32768 |
| 42+  |     -2 |  0  | -32768 |
| 43   |     -2 |  0  | -32768 |
| 43+  |     -2 |  1  | -32768 |
| 44   |     -2 |  1  |     -2 |
| 44+  |     -3 |  0  |     -2 |
| 45   |     -3 |  0  |     -2 |
| 45+  |     -3 |  1  |     -2 |
| 46   |     -3 |  1  |     -3 |
| 46+  |     -5 |  0  |     -3 |
| 47   |     -5 |  0  |     -3 |
| 47+  |     -5 |  1  |     -3 |
| 48   |     -5 |  1  |     -5 |
| 48+  |     -9 |  0  |     -5 |
| 49   |     -9 |  0  |     -5 |
| 49+  |     -9 |  1  |     -5 |
| 50   |     -9 |  1  |     -9 |
| 50+  |    -17 |  0  |     -9 |
| 51   |    -17 |  0  |     -9 |
| 51+  |    -17 |  1  |     -9 |
| 52   |    -17 |  1  |    -17 |
| 52+  |    -33 |  0  |    -17 |
| 53   |    -33 |  0  |    -17 |
| 53+  |    -33 |  1  |    -17 |
| 54   |    -33 |  1  |    -33 |
| 54+  |    -65 |  0  |    -33 |
| 55   |    -65 |  0  |    -33 |
| 55+  |    -65 |  1  |    -33 |
| 56   |    -65 |  1  |    -65 |
| 56+  |   -129 |  0  |    -65 |
| 57   |   -129 |  0  |    -65 |
| 57+  |   -129 |  1  |    -65 |
| 58   |   -129 |  1  |   -129 |
| 58+  |   -257 |  0  |   -129 |
| 59   |   -257 |  0  |   -129 |
| 59+  |   -257 |  1  |   -129 |
| 60   |   -257 |  1  |   -257 |
| 60+  |   -513 |  0  |   -257 |
| 61   |   -513 |  0  |   -257 |
| 61+  |   -513 |  1  |   -257 |
| 62   |   -513 |  1  |   -513 |
| 62+  |  -1025 |  0  |   -513 |
| 63   |  -1025 |  0  |   -513 |
| 63+  |  -1025 |  1  |   -513 |
| 64   |  -1025 |  1  |  -1025 |
| 64+  |  -2049 |  0  |  -1025 |
| 65   |  -2049 |  0  |  -1025 |
| 65+  |  -2049 |  1  |  -1025 |
| 66   |  -2049 |  1  |  -2049 |
| 66+  |  -4097 |  0  |  -2049 |
| 67   |  -4097 |  0  |  -2049 |
| 67+  |  -4097 |  1  |  -2049 |
| 68   |  -4097 |  1  |  -4097 |
| 68+  |  -8193 |  0  |  -4097 |
| 69   |  -8193 |  0  |  -4097 |
| 69+  |  -8193 |  1  |  -4097 |
| 70   |  -8193 |  1  |  -8193 |
| 70+  | -16385 |  0  |  -8193 |
| 71   | -16385 |  0  |  -8193 |
| 71+  | -16385 |  1  |  -8193 |
| 72   | -16385 |  1  | -16385 |
| 72+  |  32767 |  0  | -16385 |
| 73   |  32767 |  0  | -16385 |
| 73+  |  32767 |  1  | -16385 |
| 74   |  32767 |  1  |  32767 |`;
