#include <stdio.h>

/* vsfff windows */
#ifdef _WIN32
#include <Windows.h>
#else
#include <unistd.h>
#endif

int main() {
	int va;

	printf("Insira um número: ");

	scanf("%d", &va);

	switch (va) {
		case -24:
			printf("Gay inverso??\n");
			break;
		case 24:
			printf("iiiiiih gay\n");
			break;
		case 420:
			for(unsigned int x=0; x < 20; ++x) {
				printf("maconha mano haha\n");
				usleep(80000);
			}
			break;
		case 69:
			printf("eita porra bichão s*xo\n");
			break;
		default:
			printf("parabéns meu, tu é macho\n");
	}
	return 0;
}
