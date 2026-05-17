import { HTTPException } from "hono/http-exception";
import type { ContentfulStatusCode } from "hono/utils/http-status";

const HTTP_STATUS_TEXTS: Record<number, string> = {
	100: "Continue",
	101: "Switching Protocols",
	102: "Processing",
	200: "OK",
	201: "Created",
	202: "Accepted",
	204: "No Content",
	301: "Moved Permanently",
	302: "Found",
	304: "Not Modified",
	400: "Bad Request",
	401: "Unauthorized",
	403: "Forbidden",
	404: "Not Found",
	405: "Method Not Allowed",
	409: "Conflict",
	410: "Gone",
	422: "Unprocessable Entity",
	429: "Too Many Requests",
	500: "Internal Server Error",
	501: "Not Implemented",
	502: "Bad Gateway",
	503: "Service Unavailable",
	504: "Gateway Timeout",
};

type HTTPExceptionOptions = {
	message: string;
	success?: boolean;
	statusText?: string;
	data?: null;
};

export class AppHTTPException extends HTTPException {
	public readonly success: boolean;
	public readonly statusText: string;
	public readonly data: null;

	constructor(
		status: ContentfulStatusCode | number,
		options: HTTPExceptionOptions,
	) {
		const {
			message,
			success = false,
			statusText = HTTP_STATUS_TEXTS[status] ?? "",
			data = null,
		} = options;
		super(status as ContentfulStatusCode, { message });
		this.success = success;
		this.statusText = statusText;
		this.data = data;
	}
}
