export const hdl = `/**
 * Memory of 64 registers, each 16 bit-wide. Out holds the value
 * stored at the memory location specified by address. If load==1, then 
 * the in value is loaded into the memory location specified by address 
 * (the loaded value will be emitted to out from the next time step onward).
 */

CHIP RAM64 {
    IN in[16], load, address[6];
    OUT out[16];
    
    PARTS:
}`;
export const tst = `output-list time%S1.4.1 in%D1.6.1 load%B2.1.2 address%D2.3.2 out%D1.6.1;

set in 0, set load 0,
set address 0, tick, output; tock, output;
set load 1, tick, output; tock, output;
set in 1313, set load 0, tick, output; tock, output;
set load 1,
set address 13, tick, output; tock, output;
set load 0,
set address 0, tick, output; tock, output;
set in 4747, set address 47, tick, output; tock, output;
set load 1, tick, output; tock, output;
set load 0, tick, output; tock, output;
set address 13, eval, output;

set in 6363, tick, output; tock, output;
set load 1,
set address 63, tick, output; tock, output;
set load 0, tick, output; tock, output;
set address 47, eval, output;

set address 63, eval, output;

set load 0,
set address %B101000, tick, output; tock, output;
set address %B101001, eval, output;
set address %B101010, eval, output;
set address %B101011, eval, output;
set address %B101100, eval, output;
set address %B101101, eval, output;
set address %B101110, eval, output;
set address %B101111, eval, output;

set load 1,
set in %B0101010101010101, set address %B101000, tick, output; tock, output;
set address %B101001, tick, output, tock, output;
set address %B101010, tick, output, tock, output;
set address %B101011, tick, output, tock, output;
set address %B101100, tick, output, tock, output;
set address %B101101, tick, output, tock, output;
set address %B101110, tick, output, tock, output;
set address %B101111, tick, output, tock, output;

set load 0,
set address %B101000, tick, output; tock, output;
set address %B101001, eval, output;
set address %B101010, eval, output;
set address %B101011, eval, output;
set address %B101100, eval, output;
set address %B101101, eval, output;
set address %B101110, eval, output;
set address %B101111, eval, output;

set load 1,
set address %B101000, set in %B1010101010101010, tick, output; tock, output;
set load 0,
set address %B101000, tick, output; tock, output;
set address %B101001, eval, output;
set address %B101010, eval, output;
set address %B101011, eval, output;
set address %B101100, eval, output;
set address %B101101, eval, output;
set address %B101110, eval, output;
set address %B101111, eval, output;

set load 1,
set address %B101000, set in %B0101010101010101, tick, output, tock, output;
set address %B101001, set in %B1010101010101010, tick, output; tock, output;
set load 0,
set address %B101000, tick, output; tock, output;
set address %B101001, eval, output;
set address %B101010, eval, output;
set address %B101011, eval, output;
set address %B101100, eval, output;
set address %B101101, eval, output;
set address %B101110, eval, output;
set address %B101111, eval, output;

set load 1,
set address %B101001, set in %B0101010101010101, tick, output, tock, output;
set address %B101010, set in %B1010101010101010, tick, output; tock, output;
set load 0,
set address %B101000, tick, output; tock, output;
set address %B101001, eval, output;
set address %B101010, eval, output;
set address %B101011, eval, output;
set address %B101100, eval, output;
set address %B101101, eval, output;
set address %B101110, eval, output;
set address %B101111, eval, output;

set load 1,
set address %B101010, set in %B0101010101010101, tick, output, tock, output;
set address %B101011, set in %B1010101010101010, tick, output; tock, output;
set load 0,
set address %B101000, tick, output; tock, output;
set address %B101001, eval, output;
set address %B101010, eval, output;
set address %B101011, eval, output;
set address %B101100, eval, output;
set address %B101101, eval, output;
set address %B101110, eval, output;
set address %B101111, eval, output;

set load 1,
set address %B101011, set in %B0101010101010101, tick, output, tock, output;
set address %B101100, set in %B1010101010101010, tick, output; tock, output;
set load 0,
set address %B101000, tick, output; tock, output;
set address %B101001, eval, output;
set address %B101010, eval, output;
set address %B101011, eval, output;
set address %B101100, eval, output;
set address %B101101, eval, output;
set address %B101110, eval, output;
set address %B101111, eval, output;

set load 1,
set address %B101100, set in %B0101010101010101, tick, output, tock, output;
set address %B101101, set in %B1010101010101010, tick, output; tock, output;
set load 0,
set address %B101000, tick, output; tock, output;
set address %B101001, eval, output;
set address %B101010, eval, output;
set address %B101011, eval, output;
set address %B101100, eval, output;
set address %B101101, eval, output;
set address %B101110, eval, output;
set address %B101111, eval, output;

set load 1,
set address %B101101, set in %B0101010101010101, tick, output, tock, output;
set address %B101110, set in %B1010101010101010, tick, output; tock, output;
set load 0,
set address %B101000, tick, output; tock, output;
set address %B101001, eval, output;
set address %B101010, eval, output;
set address %B101011, eval, output;
set address %B101100, eval, output;
set address %B101101, eval, output;
set address %B101110, eval, output;
set address %B101111, eval, output;

set load 1,
set address %B101110, set in %B0101010101010101, tick, output, tock, output;
set address %B101111, set in %B1010101010101010, tick, output; tock, output;
set load 0,
set address %B101000, tick, output; tock, output;
set address %B101001, eval, output;
set address %B101010, eval, output;
set address %B101011, eval, output;
set address %B101100, eval, output;
set address %B101101, eval, output;
set address %B101110, eval, output;
set address %B101111, eval, output;

set load 1,
set address %B101111, set in %B0101010101010101, tick, output, tock, output;

set load 0,
set address %B101000, tick, output; tock, output;
set address %B101001, eval, output;
set address %B101010, eval, output;
set address %B101011, eval, output;
set address %B101100, eval, output;
set address %B101101, eval, output;
set address %B101110, eval, output;
set address %B101111, eval, output;

set load 0,
set address %B000101, tick, output; tock, output;
set address %B001101, eval, output;
set address %B010101, eval, output;
set address %B011101, eval, output;
set address %B100101, eval, output;
set address %B101101, eval, output;
set address %B110101, eval, output;
set address %B111101, eval, output;

set load 1,
set in %B0101010101010101, set address %B000101, tick, output; tock, output;
set address %B001101, tick, output, tock, output;
set address %B010101, tick, output, tock, output;
set address %B011101, tick, output, tock, output;
set address %B100101, tick, output, tock, output;
set address %B101101, tick, output, tock, output;
set address %B110101, tick, output, tock, output;
set address %B111101, tick, output, tock, output;

set load 0,
set address %B000101, tick, output; tock, output;
set address %B001101, eval, output;
set address %B010101, eval, output;
set address %B011101, eval, output;
set address %B100101, eval, output;
set address %B101101, eval, output;
set address %B110101, eval, output;
set address %B111101, eval, output;

set load 1,
set address %B000101, set in %B1010101010101010, tick, output; tock, output;
set load 0,
set address %B000101, tick, output; tock, output;
set address %B001101, eval, output;
set address %B010101, eval, output;
set address %B011101, eval, output;
set address %B100101, eval, output;
set address %B101101, eval, output;
set address %B110101, eval, output;
set address %B111101, eval, output;

set load 1,
set address %B000101, set in %B0101010101010101, tick, output, tock, output;
set address %B001101, set in %B1010101010101010, tick, output; tock, output;
set load 0,
set address %B000101, tick, output; tock, output;
set address %B001101, eval, output;
set address %B010101, eval, output;
set address %B011101, eval, output;
set address %B100101, eval, output;
set address %B101101, eval, output;
set address %B110101, eval, output;
set address %B111101, eval, output;

set load 1,
set address %B001101, set in %B0101010101010101, tick, output, tock, output;
set address %B010101, set in %B1010101010101010, tick, output; tock, output;
set load 0,
set address %B000101, tick, output; tock, output;
set address %B001101, eval, output;
set address %B010101, eval, output;
set address %B011101, eval, output;
set address %B100101, eval, output;
set address %B101101, eval, output;
set address %B110101, eval, output;
set address %B111101, eval, output;

set load 1,
set address %B010101, set in %B0101010101010101, tick, output, tock, output;
set address %B011101, set in %B1010101010101010, tick, output; tock, output;
set load 0,
set address %B000101, tick, output; tock, output;
set address %B001101, eval, output;
set address %B010101, eval, output;
set address %B011101, eval, output;
set address %B100101, eval, output;
set address %B101101, eval, output;
set address %B110101, eval, output;
set address %B111101, eval, output;

set load 1,
set address %B011101, set in %B0101010101010101, tick, output, tock, output;
set address %B100101, set in %B1010101010101010, tick, output; tock, output;
set load 0,
set address %B000101, tick, output; tock, output;
set address %B001101, eval, output;
set address %B010101, eval, output;
set address %B011101, eval, output;
set address %B100101, eval, output;
set address %B101101, eval, output;
set address %B110101, eval, output;
set address %B111101, eval, output;

set load 1,
set address %B100101, set in %B0101010101010101, tick, output, tock, output;
set address %B101101, set in %B1010101010101010, tick, output; tock, output;
set load 0,
set address %B000101, tick, output; tock, output;
set address %B001101, eval, output;
set address %B010101, eval, output;
set address %B011101, eval, output;
set address %B100101, eval, output;
set address %B101101, eval, output;
set address %B110101, eval, output;
set address %B111101, eval, output;

set load 1,
set address %B101101, set in %B0101010101010101, tick, output, tock, output;
set address %B110101, set in %B1010101010101010, tick, output; tock, output;
set load 0,
set address %B000101, tick, output; tock, output;
set address %B001101, eval, output;
set address %B010101, eval, output;
set address %B011101, eval, output;
set address %B100101, eval, output;
set address %B101101, eval, output;
set address %B110101, eval, output;
set address %B111101, eval, output;

set load 1,
set address %B110101, set in %B0101010101010101, tick, output, tock, output;
set address %B111101, set in %B1010101010101010, tick, output; tock, output;
set load 0,
set address %B000101, tick, output; tock, output;
set address %B001101, eval, output;
set address %B010101, eval, output;
set address %B011101, eval, output;
set address %B100101, eval, output;
set address %B101101, eval, output;
set address %B110101, eval, output;
set address %B111101, eval, output;

set load 1,
set address %B111101, set in %B0101010101010101, tick, output, tock, output;

set load 0,
set address %B000101, tick, output; tock, output;
set address %B001101, eval, output;
set address %B010101, eval, output;
set address %B011101, eval, output;
set address %B100101, eval, output;
set address %B101101, eval, output;
set address %B110101, eval, output;
set address %B111101, eval, output;`;

export const cmp = `| time |   in   |load |address|  out   |
| 0+   |      0 |  0  |    0  |      0 |
| 1    |      0 |  0  |    0  |      0 |
| 1+   |      0 |  1  |    0  |      0 |
| 2    |      0 |  1  |    0  |      0 |
| 2+   |   1313 |  0  |    0  |      0 |
| 3    |   1313 |  0  |    0  |      0 |
| 3+   |   1313 |  1  |   13  |      0 |
| 4    |   1313 |  1  |   13  |   1313 |
| 4+   |   1313 |  0  |    0  |      0 |
| 5    |   1313 |  0  |    0  |      0 |
| 5+   |   4747 |  0  |   47  |      0 |
| 6    |   4747 |  0  |   47  |      0 |
| 6+   |   4747 |  1  |   47  |      0 |
| 7    |   4747 |  1  |   47  |   4747 |
| 7+   |   4747 |  0  |   47  |   4747 |
| 8    |   4747 |  0  |   47  |   4747 |
| 8    |   4747 |  0  |   13  |   1313 |
| 8+   |   6363 |  0  |   13  |   1313 |
| 9    |   6363 |  0  |   13  |   1313 |
| 9+   |   6363 |  1  |   63  |      0 |
| 10   |   6363 |  1  |   63  |   6363 |
| 10+  |   6363 |  0  |   63  |   6363 |
| 11   |   6363 |  0  |   63  |   6363 |
| 11   |   6363 |  0  |   47  |   4747 |
| 11   |   6363 |  0  |   63  |   6363 |
| 11+  |   6363 |  0  |   40  |      0 |
| 12   |   6363 |  0  |   40  |      0 |
| 12   |   6363 |  0  |   41  |      0 |
| 12   |   6363 |  0  |   42  |      0 |
| 12   |   6363 |  0  |   43  |      0 |
| 12   |   6363 |  0  |   44  |      0 |
| 12   |   6363 |  0  |   45  |      0 |
| 12   |   6363 |  0  |   46  |      0 |
| 12   |   6363 |  0  |   47  |   4747 |
| 12+  |  21845 |  1  |   40  |      0 |
| 13   |  21845 |  1  |   40  |  21845 |
| 13+  |  21845 |  1  |   41  |      0 |
| 14   |  21845 |  1  |   41  |  21845 |
| 14+  |  21845 |  1  |   42  |      0 |
| 15   |  21845 |  1  |   42  |  21845 |
| 15+  |  21845 |  1  |   43  |      0 |
| 16   |  21845 |  1  |   43  |  21845 |
| 16+  |  21845 |  1  |   44  |      0 |
| 17   |  21845 |  1  |   44  |  21845 |
| 17+  |  21845 |  1  |   45  |      0 |
| 18   |  21845 |  1  |   45  |  21845 |
| 18+  |  21845 |  1  |   46  |      0 |
| 19   |  21845 |  1  |   46  |  21845 |
| 19+  |  21845 |  1  |   47  |   4747 |
| 20   |  21845 |  1  |   47  |  21845 |
| 20+  |  21845 |  0  |   40  |  21845 |
| 21   |  21845 |  0  |   40  |  21845 |
| 21   |  21845 |  0  |   41  |  21845 |
| 21   |  21845 |  0  |   42  |  21845 |
| 21   |  21845 |  0  |   43  |  21845 |
| 21   |  21845 |  0  |   44  |  21845 |
| 21   |  21845 |  0  |   45  |  21845 |
| 21   |  21845 |  0  |   46  |  21845 |
| 21   |  21845 |  0  |   47  |  21845 |
| 21+  | -21846 |  1  |   40  |  21845 |
| 22   | -21846 |  1  |   40  | -21846 |
| 22+  | -21846 |  0  |   40  | -21846 |
| 23   | -21846 |  0  |   40  | -21846 |
| 23   | -21846 |  0  |   41  |  21845 |
| 23   | -21846 |  0  |   42  |  21845 |
| 23   | -21846 |  0  |   43  |  21845 |
| 23   | -21846 |  0  |   44  |  21845 |
| 23   | -21846 |  0  |   45  |  21845 |
| 23   | -21846 |  0  |   46  |  21845 |
| 23   | -21846 |  0  |   47  |  21845 |
| 23+  |  21845 |  1  |   40  | -21846 |
| 24   |  21845 |  1  |   40  |  21845 |
| 24+  | -21846 |  1  |   41  |  21845 |
| 25   | -21846 |  1  |   41  | -21846 |
| 25+  | -21846 |  0  |   40  |  21845 |
| 26   | -21846 |  0  |   40  |  21845 |
| 26   | -21846 |  0  |   41  | -21846 |
| 26   | -21846 |  0  |   42  |  21845 |
| 26   | -21846 |  0  |   43  |  21845 |
| 26   | -21846 |  0  |   44  |  21845 |
| 26   | -21846 |  0  |   45  |  21845 |
| 26   | -21846 |  0  |   46  |  21845 |
| 26   | -21846 |  0  |   47  |  21845 |
| 26+  |  21845 |  1  |   41  | -21846 |
| 27   |  21845 |  1  |   41  |  21845 |
| 27+  | -21846 |  1  |   42  |  21845 |
| 28   | -21846 |  1  |   42  | -21846 |
| 28+  | -21846 |  0  |   40  |  21845 |
| 29   | -21846 |  0  |   40  |  21845 |
| 29   | -21846 |  0  |   41  |  21845 |
| 29   | -21846 |  0  |   42  | -21846 |
| 29   | -21846 |  0  |   43  |  21845 |
| 29   | -21846 |  0  |   44  |  21845 |
| 29   | -21846 |  0  |   45  |  21845 |
| 29   | -21846 |  0  |   46  |  21845 |
| 29   | -21846 |  0  |   47  |  21845 |
| 29+  |  21845 |  1  |   42  | -21846 |
| 30   |  21845 |  1  |   42  |  21845 |
| 30+  | -21846 |  1  |   43  |  21845 |
| 31   | -21846 |  1  |   43  | -21846 |
| 31+  | -21846 |  0  |   40  |  21845 |
| 32   | -21846 |  0  |   40  |  21845 |
| 32   | -21846 |  0  |   41  |  21845 |
| 32   | -21846 |  0  |   42  |  21845 |
| 32   | -21846 |  0  |   43  | -21846 |
| 32   | -21846 |  0  |   44  |  21845 |
| 32   | -21846 |  0  |   45  |  21845 |
| 32   | -21846 |  0  |   46  |  21845 |
| 32   | -21846 |  0  |   47  |  21845 |
| 32+  |  21845 |  1  |   43  | -21846 |
| 33   |  21845 |  1  |   43  |  21845 |
| 33+  | -21846 |  1  |   44  |  21845 |
| 34   | -21846 |  1  |   44  | -21846 |
| 34+  | -21846 |  0  |   40  |  21845 |
| 35   | -21846 |  0  |   40  |  21845 |
| 35   | -21846 |  0  |   41  |  21845 |
| 35   | -21846 |  0  |   42  |  21845 |
| 35   | -21846 |  0  |   43  |  21845 |
| 35   | -21846 |  0  |   44  | -21846 |
| 35   | -21846 |  0  |   45  |  21845 |
| 35   | -21846 |  0  |   46  |  21845 |
| 35   | -21846 |  0  |   47  |  21845 |
| 35+  |  21845 |  1  |   44  | -21846 |
| 36   |  21845 |  1  |   44  |  21845 |
| 36+  | -21846 |  1  |   45  |  21845 |
| 37   | -21846 |  1  |   45  | -21846 |
| 37+  | -21846 |  0  |   40  |  21845 |
| 38   | -21846 |  0  |   40  |  21845 |
| 38   | -21846 |  0  |   41  |  21845 |
| 38   | -21846 |  0  |   42  |  21845 |
| 38   | -21846 |  0  |   43  |  21845 |
| 38   | -21846 |  0  |   44  |  21845 |
| 38   | -21846 |  0  |   45  | -21846 |
| 38   | -21846 |  0  |   46  |  21845 |
| 38   | -21846 |  0  |   47  |  21845 |
| 38+  |  21845 |  1  |   45  | -21846 |
| 39   |  21845 |  1  |   45  |  21845 |
| 39+  | -21846 |  1  |   46  |  21845 |
| 40   | -21846 |  1  |   46  | -21846 |
| 40+  | -21846 |  0  |   40  |  21845 |
| 41   | -21846 |  0  |   40  |  21845 |
| 41   | -21846 |  0  |   41  |  21845 |
| 41   | -21846 |  0  |   42  |  21845 |
| 41   | -21846 |  0  |   43  |  21845 |
| 41   | -21846 |  0  |   44  |  21845 |
| 41   | -21846 |  0  |   45  |  21845 |
| 41   | -21846 |  0  |   46  | -21846 |
| 41   | -21846 |  0  |   47  |  21845 |
| 41+  |  21845 |  1  |   46  | -21846 |
| 42   |  21845 |  1  |   46  |  21845 |
| 42+  | -21846 |  1  |   47  |  21845 |
| 43   | -21846 |  1  |   47  | -21846 |
| 43+  | -21846 |  0  |   40  |  21845 |
| 44   | -21846 |  0  |   40  |  21845 |
| 44   | -21846 |  0  |   41  |  21845 |
| 44   | -21846 |  0  |   42  |  21845 |
| 44   | -21846 |  0  |   43  |  21845 |
| 44   | -21846 |  0  |   44  |  21845 |
| 44   | -21846 |  0  |   45  |  21845 |
| 44   | -21846 |  0  |   46  |  21845 |
| 44   | -21846 |  0  |   47  | -21846 |
| 44+  |  21845 |  1  |   47  | -21846 |
| 45   |  21845 |  1  |   47  |  21845 |
| 45+  |  21845 |  0  |   40  |  21845 |
| 46   |  21845 |  0  |   40  |  21845 |
| 46   |  21845 |  0  |   41  |  21845 |
| 46   |  21845 |  0  |   42  |  21845 |
| 46   |  21845 |  0  |   43  |  21845 |
| 46   |  21845 |  0  |   44  |  21845 |
| 46   |  21845 |  0  |   45  |  21845 |
| 46   |  21845 |  0  |   46  |  21845 |
| 46   |  21845 |  0  |   47  |  21845 |
| 46+  |  21845 |  0  |    5  |      0 |
| 47   |  21845 |  0  |    5  |      0 |
| 47   |  21845 |  0  |   13  |   1313 |
| 47   |  21845 |  0  |   21  |      0 |
| 47   |  21845 |  0  |   29  |      0 |
| 47   |  21845 |  0  |   37  |      0 |
| 47   |  21845 |  0  |   45  |  21845 |
| 47   |  21845 |  0  |   53  |      0 |
| 47   |  21845 |  0  |   61  |      0 |
| 47+  |  21845 |  1  |    5  |      0 |
| 48   |  21845 |  1  |    5  |  21845 |
| 48+  |  21845 |  1  |   13  |   1313 |
| 49   |  21845 |  1  |   13  |  21845 |
| 49+  |  21845 |  1  |   21  |      0 |
| 50   |  21845 |  1  |   21  |  21845 |
| 50+  |  21845 |  1  |   29  |      0 |
| 51   |  21845 |  1  |   29  |  21845 |
| 51+  |  21845 |  1  |   37  |      0 |
| 52   |  21845 |  1  |   37  |  21845 |
| 52+  |  21845 |  1  |   45  |  21845 |
| 53   |  21845 |  1  |   45  |  21845 |
| 53+  |  21845 |  1  |   53  |      0 |
| 54   |  21845 |  1  |   53  |  21845 |
| 54+  |  21845 |  1  |   61  |      0 |
| 55   |  21845 |  1  |   61  |  21845 |
| 55+  |  21845 |  0  |    5  |  21845 |
| 56   |  21845 |  0  |    5  |  21845 |
| 56   |  21845 |  0  |   13  |  21845 |
| 56   |  21845 |  0  |   21  |  21845 |
| 56   |  21845 |  0  |   29  |  21845 |
| 56   |  21845 |  0  |   37  |  21845 |
| 56   |  21845 |  0  |   45  |  21845 |
| 56   |  21845 |  0  |   53  |  21845 |
| 56   |  21845 |  0  |   61  |  21845 |
| 56+  | -21846 |  1  |    5  |  21845 |
| 57   | -21846 |  1  |    5  | -21846 |
| 57+  | -21846 |  0  |    5  | -21846 |
| 58   | -21846 |  0  |    5  | -21846 |
| 58   | -21846 |  0  |   13  |  21845 |
| 58   | -21846 |  0  |   21  |  21845 |
| 58   | -21846 |  0  |   29  |  21845 |
| 58   | -21846 |  0  |   37  |  21845 |
| 58   | -21846 |  0  |   45  |  21845 |
| 58   | -21846 |  0  |   53  |  21845 |
| 58   | -21846 |  0  |   61  |  21845 |
| 58+  |  21845 |  1  |    5  | -21846 |
| 59   |  21845 |  1  |    5  |  21845 |
| 59+  | -21846 |  1  |   13  |  21845 |
| 60   | -21846 |  1  |   13  | -21846 |
| 60+  | -21846 |  0  |    5  |  21845 |
| 61   | -21846 |  0  |    5  |  21845 |
| 61   | -21846 |  0  |   13  | -21846 |
| 61   | -21846 |  0  |   21  |  21845 |
| 61   | -21846 |  0  |   29  |  21845 |
| 61   | -21846 |  0  |   37  |  21845 |
| 61   | -21846 |  0  |   45  |  21845 |
| 61   | -21846 |  0  |   53  |  21845 |
| 61   | -21846 |  0  |   61  |  21845 |
| 61+  |  21845 |  1  |   13  | -21846 |
| 62   |  21845 |  1  |   13  |  21845 |
| 62+  | -21846 |  1  |   21  |  21845 |
| 63   | -21846 |  1  |   21  | -21846 |
| 63+  | -21846 |  0  |    5  |  21845 |
| 64   | -21846 |  0  |    5  |  21845 |
| 64   | -21846 |  0  |   13  |  21845 |
| 64   | -21846 |  0  |   21  | -21846 |
| 64   | -21846 |  0  |   29  |  21845 |
| 64   | -21846 |  0  |   37  |  21845 |
| 64   | -21846 |  0  |   45  |  21845 |
| 64   | -21846 |  0  |   53  |  21845 |
| 64   | -21846 |  0  |   61  |  21845 |
| 64+  |  21845 |  1  |   21  | -21846 |
| 65   |  21845 |  1  |   21  |  21845 |
| 65+  | -21846 |  1  |   29  |  21845 |
| 66   | -21846 |  1  |   29  | -21846 |
| 66+  | -21846 |  0  |    5  |  21845 |
| 67   | -21846 |  0  |    5  |  21845 |
| 67   | -21846 |  0  |   13  |  21845 |
| 67   | -21846 |  0  |   21  |  21845 |
| 67   | -21846 |  0  |   29  | -21846 |
| 67   | -21846 |  0  |   37  |  21845 |
| 67   | -21846 |  0  |   45  |  21845 |
| 67   | -21846 |  0  |   53  |  21845 |
| 67   | -21846 |  0  |   61  |  21845 |
| 67+  |  21845 |  1  |   29  | -21846 |
| 68   |  21845 |  1  |   29  |  21845 |
| 68+  | -21846 |  1  |   37  |  21845 |
| 69   | -21846 |  1  |   37  | -21846 |
| 69+  | -21846 |  0  |    5  |  21845 |
| 70   | -21846 |  0  |    5  |  21845 |
| 70   | -21846 |  0  |   13  |  21845 |
| 70   | -21846 |  0  |   21  |  21845 |
| 70   | -21846 |  0  |   29  |  21845 |
| 70   | -21846 |  0  |   37  | -21846 |
| 70   | -21846 |  0  |   45  |  21845 |
| 70   | -21846 |  0  |   53  |  21845 |
| 70   | -21846 |  0  |   61  |  21845 |
| 70+  |  21845 |  1  |   37  | -21846 |
| 71   |  21845 |  1  |   37  |  21845 |
| 71+  | -21846 |  1  |   45  |  21845 |
| 72   | -21846 |  1  |   45  | -21846 |
| 72+  | -21846 |  0  |    5  |  21845 |
| 73   | -21846 |  0  |    5  |  21845 |
| 73   | -21846 |  0  |   13  |  21845 |
| 73   | -21846 |  0  |   21  |  21845 |
| 73   | -21846 |  0  |   29  |  21845 |
| 73   | -21846 |  0  |   37  |  21845 |
| 73   | -21846 |  0  |   45  | -21846 |
| 73   | -21846 |  0  |   53  |  21845 |
| 73   | -21846 |  0  |   61  |  21845 |
| 73+  |  21845 |  1  |   45  | -21846 |
| 74   |  21845 |  1  |   45  |  21845 |
| 74+  | -21846 |  1  |   53  |  21845 |
| 75   | -21846 |  1  |   53  | -21846 |
| 75+  | -21846 |  0  |    5  |  21845 |
| 76   | -21846 |  0  |    5  |  21845 |
| 76   | -21846 |  0  |   13  |  21845 |
| 76   | -21846 |  0  |   21  |  21845 |
| 76   | -21846 |  0  |   29  |  21845 |
| 76   | -21846 |  0  |   37  |  21845 |
| 76   | -21846 |  0  |   45  |  21845 |
| 76   | -21846 |  0  |   53  | -21846 |
| 76   | -21846 |  0  |   61  |  21845 |
| 76+  |  21845 |  1  |   53  | -21846 |
| 77   |  21845 |  1  |   53  |  21845 |
| 77+  | -21846 |  1  |   61  |  21845 |
| 78   | -21846 |  1  |   61  | -21846 |
| 78+  | -21846 |  0  |    5  |  21845 |
| 79   | -21846 |  0  |    5  |  21845 |
| 79   | -21846 |  0  |   13  |  21845 |
| 79   | -21846 |  0  |   21  |  21845 |
| 79   | -21846 |  0  |   29  |  21845 |
| 79   | -21846 |  0  |   37  |  21845 |
| 79   | -21846 |  0  |   45  |  21845 |
| 79   | -21846 |  0  |   53  |  21845 |
| 79   | -21846 |  0  |   61  | -21846 |
| 79+  |  21845 |  1  |   61  | -21846 |
| 80   |  21845 |  1  |   61  |  21845 |
| 80+  |  21845 |  0  |    5  |  21845 |
| 81   |  21845 |  0  |    5  |  21845 |
| 81   |  21845 |  0  |   13  |  21845 |
| 81   |  21845 |  0  |   21  |  21845 |
| 81   |  21845 |  0  |   29  |  21845 |
| 81   |  21845 |  0  |   37  |  21845 |
| 81   |  21845 |  0  |   45  |  21845 |
| 81   |  21845 |  0  |   53  |  21845 |
| 81   |  21845 |  0  |   61  |  21845 |`;
