#include <stdio.h> 

int main (int argc, char *argv[]) {
	int um, dois, treis;
	sscanf(argv[1], "%d %d %d", &um, &dois, &treis);
	printf("%d %d %d\n", um + 1, 2 * dois, treis);
	return 0;
}

